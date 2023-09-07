import { readCharacters } from "@/lib/character";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic';
export const revalidate = 1;

//______________________________________________________________________________________
// ===== GET =====
export async function GET() {
    console.log("all characters GET hit")
    const characters = await readCharacters({ visibility: "PUBLIC" }); // 
    return NextResponse.json([true, "Success!", characters]);
}