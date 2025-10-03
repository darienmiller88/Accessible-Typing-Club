import connectMongoDB from "../../lib/mongodb";
import LessonModel from "../../models/Lesson";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const { first_name, last_name} = await request.json()
        await connectMongoDB()
        return NextResponse.json({ first_name, last_name }, { status: 200 })
    } catch (error) {
        console.log("error");
        return NextResponse.json(error, { status: 500 })
    }
}