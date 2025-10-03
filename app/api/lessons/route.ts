import connectMongoDB from "../../lib/mongodb";
import LessonModel from "../../models/Lesson";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        await connectMongoDB()
        NextResponse.json({ message: "hello world"}, { status: 200 })
    } catch (error) {
        console.log("error");
        NextResponse.json(error, { status: 500 })
    }
}