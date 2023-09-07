// React/Next --------------------------------------------------------
import { NextResponse } from 'next/server'
// Prisma ------------------------------------------------------------
import { readCharacterById, createCharacter, updateCharacter, deleteCharacter } from '@/lib/character';
// Data --------------------------------------------------------------
// Util --------------------------------------------------------------
import { apiProtector, readServerSession } from '@/lib/protector';
import { isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';



//______________________________________________________________________________________
// ===== Conditional Functions =====

const characterValid = (character) => {
    return isObj(character, [ "visibility", "name" ]) && isObj(character.baseData, [ "level", "hitpoints", "armor", "race", "classes", "speeds" ]) && isObj(character.abilities);
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
    if(!(characterValid(character))) return NextResponse.json([false, "Missing character data!", character ]);

    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized ]);

    // Use Prisma to create the data in the DB
    const newCharacter = await createCharacter({ ...character, userEmail: session.user.email });

    // API Return
    return NextResponse.json([true, "Success!", newCharacter]);
}



//______________________________________________________________________________________
// ===== Put Method for /api/character =====

export async function PUT(request) {

    // Extract Data from Request
    const { character } = await request.json();
    if(!(characterValid(character))) return NextResponse.json([false, "Missing character data!", character ]);
    if(!character.id){ return NextResponse.json([false, "Missing Character Id!", character ]) };

    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized]);

    // More Protection
    const characterBeforeUpdate = await readCharacterById(character.id);
    if( !(isObj(characterBeforeUpdate, ["id", "userEmail"]) && characterBeforeUpdate.userEmail === session.user.email) )
        return NextResponse.json([false, "This is not your character!" ])
    
    // Use Prisma to create the data in the DB
    const updatedCharacter = await updateCharacter(character.id, character);

    // API Return
    return NextResponse.json([true, "Success!", updatedCharacter]);
}





//______________________________________________________________________________________
// ===== Delete Method for /api/character =====

export async function DELETE(request) {

    //______________________________________________________________________________________
    // ===== Extract Data from Request =====
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    

    //______________________________________________________________________________________
    // ===== Protection =====
    
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return  NextResponse.json({done: false, authorized, message: message ? message : "Unauthorized!" });

    const character = await readCharacterById(id);
    if( !(isObj(character, ["id", "userEmail"]) && character.userEmail === session.user.email) ){
        return NextResponse.json({done: false, message: "This is not your character!" });
    }

    
    //______________________________________________________________________________________
    // ===== Use Prisma to create the data in the DB =====

    const characterDeleted = await deleteCharacter(id);
    


    //______________________________________________________________________________________
    // ===== API Return =====

    return NextResponse.json({done: true, message: `Successfully Deleted ${character.name}!`});
}