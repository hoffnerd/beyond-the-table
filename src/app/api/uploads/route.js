
import { NextResponse } from "next/server";
import { apiProtector } from "@/lib/protector";
import { readUploadsByUser } from "@/lib/upload";



//______________________________________________________________________________________
// ===== Get Method for /api/uploads =====

// export async function GET(request) {
//     const uploads = await readUploadsByUser("thetablebeyond@gmail.com");
//     return NextResponse.json(uploads);
// }

export async function GET(request) {

    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json({done: false, authorized, message: message ? message : "Unauthorized!" });

    const uploads = await readUploadsByUser(session.user.email);
    return NextResponse.json({done: true, uploads});
}