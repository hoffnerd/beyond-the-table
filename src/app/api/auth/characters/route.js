
import { NextResponse } from "next/server";
import { readCharacters } from "@/lib/character";
import { apiProtector } from "@/lib/protector";


//______________________________________________________________________________________
// ===== GET =====
export async function GET() {

    //______________________________________________________________________________________
    // ===== Protection =====
    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized ]);
    if( !(session && session.user && session.user.email) ) return NextResponse.json([false, "Missing Email!", authorized ]);

    //______________________________________________________________________________________
    // ===== GET Return =====
    const characters = await readCharacters({ userEmail: session.user.email });
    return NextResponse.json([true, "Success!", characters]);
}