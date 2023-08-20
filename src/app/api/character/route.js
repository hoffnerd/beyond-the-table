// React/Next --------------------------------------------------------
import { NextResponse } from 'next/server'
// Prisma ------------------------------------------------------------
import { readCharacterById, createCharacter, updateCharacter, extractDataFromRequest, processCharacter, deleteCharacter, readCharacters } from '@/lib/character';
// Data --------------------------------------------------------------
// Util --------------------------------------------------------------
import { apiProtector, readServerSession } from '@/lib/protector';
import { convertObjToArray, isArray, isObj } from '@/util';
import { isCharacterVisible } from '@/util/character';
import { characterBaseData } from '@/data/character';




//______________________________________________________________________________________
// ===== Get Method for /api/character =====
export async function GET(request) {

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



    //______________________________________________________________________________________
    // ===== Extract Data from Request =====

    const { error, message: msg, baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys } = await extractDataFromRequest(request);
    if(error) return NextResponse.json({done: false, message: msg, baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys });



    //______________________________________________________________________________________
    // ===== Protection =====
    
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json({done: false, authorized, message: message ? message : "Unauthorized!" });



    //______________________________________________________________________________________
    // ===== process the character data  =====

    let errorMsg = false
    const dataStructure = convertObjToArray(characterBaseData);
    for(let i = 0; i < dataStructure.length; i++){
        const dataStructureObj = dataStructure[i];
        if(dataStructureObj.required && !(dataStructureObj.key && baseDataInputState[dataStructureObj.key])){
            errorMsg = `Missing ${dataStructureObj.display}!`
            break;
        }
    }
    if( errorMsg ) return NextResponse.json({done: false, message: errorMsg });


    const data = await processCharacter(baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys);



    //______________________________________________________________________________________
    // ===== Use Prisma to create the data in the DB =====

    const character = await createCharacter({ userEmail: session.user.email, ...data });
    



    //______________________________________________________________________________________
    // ===== API Return =====

    return NextResponse.json({done: true, character});
}



//______________________________________________________________________________________
// ===== Put Method for /api/character =====

export async function PUT(request) {



    //______________________________________________________________________________________
    // ===== Extract Data from Request =====

    const { error, message: msg, characterId, baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys } = await extractDataFromRequest(request);
    if(error){ return NextResponse.json({done: false, message: msg, characterId, baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys }); }
    if(!characterId){ return NextResponse.json({done: false, message: "Missing Character Id!", characterId }) };

    

    //______________________________________________________________________________________
    // ===== Protection =====
    
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json({done: false, authorized, message: message ? message : "Unauthorized!" });


    const characterBeforeUpdate = await readCharacterById(characterId);
    if( !(isObj(characterBeforeUpdate, ["id", "userEmail"]) && characterBeforeUpdate.userEmail === session.user.email) ){
        return NextResponse.json({done: false, message: "This is not your character!" });
    }


    //______________________________________________________________________________________
    // ===== process the character data  =====
    let errorMsg = false
    const dataStructure = convertObjToArray(characterBaseData);
    for(let i = 0; i < dataStructure.length; i++){
        const dataStructureObj = dataStructure[i];
        if(dataStructureObj.required && !(dataStructureObj.key && baseDataInputState[dataStructureObj.key])){
            errorMsg = `Missing ${dataStructureObj.display}!`
            break;
        }
    }
    if( errorMsg ) return NextResponse.json({done: false, message: errorMsg });

    const data = await processCharacter(baseDataInputState, abilitiesInputState, quoteInputState, baseDataInputStateKeys, abilitiesInputStateKeys);


    
    //______________________________________________________________________________________
    // ===== Use Prisma to create the data in the DB =====

    const character = await updateCharacter(characterId, data);
    


    //______________________________________________________________________________________
    // ===== API Return =====

    return NextResponse.json({done: true, character});
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