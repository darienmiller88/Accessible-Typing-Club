import connectMongoDB from "../../lib/mongodb";
import LessonModel from "../../models/Lesson";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        await connectMongoDB()
    } catch (error) {
        console.log("error");
    }
}