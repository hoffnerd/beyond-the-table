import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

//______________________________________________________________________________________
// ===== Page Revalidation =====
// export const revalidate = 1;

//______________________________________________________________________________________
// ===== GET =====
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    console.log("revalidatePath ", path)
    // const path = request.nextUrl.searchParams.get('path')
    revalidatePath(path)
    return NextResponse.json({ revalidated: true, now: Date.now() })
}