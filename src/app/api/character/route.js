// React/Next --------------------------------------------------------
import { NextResponse } from 'next/server'
// Prisma ------------------------------------------------------------
import { readCharacterById, createCharacter, updateCharacter, deleteCharacter } from '@/lib/character';
// Data --------------------------------------------------------------
// Util --------------------------------------------------------------
import { apiProtector, readServerSession } from '@/lib/protector';
import { isArray, isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';



//______________________________________________________________________________________
// ===== Helper Functions =====

const characterInvalidError = (message="Something has gone wrong!") => [ false, [ false, message ] ];

const characterValid = (character) => {

    if(!isObj(character, [ "baseData" ])) return characterInvalidError();

    if(!isArray(character.baseData.classes)) return characterInvalidError(`Please add a class to your character! You can find this in the "Class" section.`);
    if(!character.baseData.hitpoints) return characterInvalidError(`Please make sure character has hit points! You can find this in the "Everything Else" section.`);

    if(!character.visibility) return characterInvalidError(`Please select a visibility option for your character! You can find this in the "Everything Else" section.`);
    if(!character.name) return characterInvalidError(`Please name your character! You can find this in the "Everything Else" section.`);

    return [ true, [ true, "This character is valid.", character ] ];
}


//______________________________________________________________________________________
// ===== Get Method for /api/character =====
export async function GET(request) {
    console.log("character GET hit")

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const session = await readServerSession();
    
    const character = await readCharacterById(id);
    
    if(!isCharacterVisible(character, session)) return NextResponse.json([false, "Character is not visible!", null]);
    return NextResponse.json([true, "Success!", character]);
}



//______________________________________________________________________________________
// ===== Post Method for /api/character =====

export async function POST(request) {

    // Extract Data from Request
    const { character } = await request.json();

    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([ false, message ? message : "Unauthorized!", {authorized} ]);

    // validate character
    const [ valid, response ] = characterValid(character);
    if(!valid) return NextResponse.json(response);

    // try to create a new character
    try {
        // Use Prisma to create the data in the DB
        const newCharacter = await createCharacter({ ...character, userEmail: session.user.email });

        // API Return
        return NextResponse.json([ true, "Success!", newCharacter ]);
    } catch ({name, message}) {
        return NextResponse.json([ false, message, { error: true, message } ]);
    }
}



//______________________________________________________________________________________
// ===== Put Method for /api/character =====

export async function PUT(request) {

    // Extract Data from Request
    const { character } = await request.json();
    console.log( "character", character )

    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized]);

    // Double check this character has an Id
    if(!character.id) return NextResponse.json([false, "Missing Character Id!", character ]);

    // More Protection
    const characterBeforeUpdate = await readCharacterById(character.id);
    if( !(isObj(characterBeforeUpdate, ["id", "userEmail"]) && characterBeforeUpdate.userEmail === session.user.email) )
        return NextResponse.json([false, "This is not your character!" ])

    // validate character
    const [ valid, response ] = characterValid(character);
    if(!valid) return NextResponse.json(response);

    
    // prisma function to update our character in the DB
    const updatedCharacter = await updateCharacter(character.id, character);

    // API Return
    return NextResponse.json([true, "Success!", updatedCharacter]);
}





//______________________________________________________________________________________
// ===== Delete Method for /api/character =====

export async function DELETE(request) {

    // Extract Data from Request
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return  NextResponse.json([false, message ? message : "Unauthorized!" ]);

    // More Protection
    const character = await readCharacterById(id);
    if( !(isObj(character, ["id", "userEmail"]) && character.userEmail === session.user.email) ) return NextResponse.json([false, "This is not your character!" ])
    
    // Use Prisma to delete the data in the DB
    const characterDeleted = await deleteCharacter(id);
    
    // API Return
    return NextResponse.json([true, `Successfully Deleted ${character.name}!`]);
}