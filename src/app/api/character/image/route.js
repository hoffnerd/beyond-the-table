// React/Next --------------------------------------------------------
import { NextResponse } from 'next/server'
// Server Functions --------------------------------------------------
import { apiProtector } from '@/lib/protector';
// Prisma ------------------------------------------------------------
import { readCharacterById, updateCharactersImage } from "@/lib/character";
// Data --------------------------------------------------------------
// Util --------------------------------------------------------------
import { isCharactersOwner } from '@/util/character';

//______________________________________________________________________________________
// ===== Patch Method for /api/character/image =====

export async function POST(request) {


    //______________________________________________________________________________________
    // ===== deconstruct request body/payload =====

    const { characterId, selectedImage, zoom, x, y } = await request.json();
    
    

    /* set up our image obj to add to the character */
    const image = {
        filename: selectedImage ? selectedImage : undefined,
        zoom: zoom ? zoom : undefined,
        x: x ? x : undefined,
        y: y ? y : undefined,
    }

    

    //______________________________________________________________________________________
    // ===== Protection =====
    
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized )  NextResponse.json({done: false, authorized, message: message ? message : "Unauthorized!", characterId, image });

    const characterBeforeUpdate = await readCharacterById(characterId);
    if ( !isCharactersOwner(characterBeforeUpdate, session) ) NextResponse.json({done: false, authorized, message: "You are not the owner of this character!", characterId, image });




    //______________________________________________________________________________________
    // ===== Use Prisma function to update the data in the DB =====

    const character = await updateCharactersImage(characterId, image);
    



    //______________________________________________________________________________________
    // ===== API Return =====

    return NextResponse.json({done: true, character});
}
