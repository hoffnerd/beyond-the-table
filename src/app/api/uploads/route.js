
import { NextResponse } from "next/server";
import { apiProtector } from "@/lib/protector";
import { createUpload, createUploads, readUploadsByUser } from "@/lib/upload";
import { isArray } from "@/util";



//______________________________________________________________________________________
// ===== Get Method for /api/uploads =====
export async function GET(request) {

    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized ]);

    const uploads = await readUploadsByUser(session.user.email);
    return NextResponse.json([true, "Success!", uploads]);
}



//______________________________________________________________________________________
// ===== POST Method for /api/uploads =====
export async function POST(request) {

    // deconstruct request body/payload
    const { files } = await request.json();
    const file = isArray(files) ? files[0] : null;

    if( !file ) return NextResponse.json([false, "Missing file!", {files, file} ]);

    const { authorized, message, session} = await apiProtector({ requiredRole: "USER" });
    if( !authorized ) return NextResponse.json([false, message ? message : "Unauthorized!", authorized ]);

    const upload = await createUpload(session.user.email, file);
    return NextResponse.json([true, "Success!", upload]);
}