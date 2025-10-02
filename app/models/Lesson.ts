import mongoose, { Schema, models } from "mongoose"; 

const LessonSchema = new Schema(
    {
        title: String,
        lessonCharacters: String,

    },
    {
        timestamps: true
    }
)

const LessonModel = models.Lesson || mongoose.model("Lesson", LessonSchema)

export default LessonModel