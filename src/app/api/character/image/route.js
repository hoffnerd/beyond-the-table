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

export async function PUT(request) {

    // deconstruct request body/payload
    const { character } = await request.json();
    
    // Protection
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized )  NextResponse.json([false, message ? message : "Unauthorized!", authorized ]);

    // More Protection
    const characterBeforeUpdate = await readCharacterById(character.id);
    if ( !isCharactersOwner(characterBeforeUpdate, session) ) NextResponse.json([false, "You are not the owner of this character!", authorized ]);


    //  Use Prisma function to update the data in the DB
    const updatedCharacter = await updateCharactersImage(character.id, character.image);

    // API Return
    return NextResponse.json([true, "Success!", updatedCharacter]);
}
