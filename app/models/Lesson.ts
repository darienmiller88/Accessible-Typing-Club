import mongoose, { Schema, models } from "mongoose";

const LessonSchema = new Schema(
    {
        email: String,
        first_name: String,
        last_name: String
    },
    {
        timestamps: true
    }
)

const LessonModel = models.Lesson || mongoose.model("Lesson", LessonSchema)

export default LessonModel