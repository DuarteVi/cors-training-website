import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest){
    return NextResponse.json({ payload: "Response of the GET request" });
}

export async function DELETE (request: NextRequest){
    return NextResponse.json({ payload: "Response of the DELETE request" });
}

