import mongoose, { Schema, models } from "mongoose";

type CompletedLesson = {
    isCompleted: boolean
    lessonId:    string
    accuracy:    number
    wpm:         number
}

const CompletedLessonSchema = new Schema<CompletedLesson>(
  {
    lessonId: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    wpm: { type: Number, required: true },
    accuracy: { type: Number, required: true },
  },
  { _id: false } // no separate _id for each subdocument
);

const UserSchema = new Schema(
    {
        email: String,
        password: String,
        first_name: String,
        last_name: String,
        total_stars: Number,
        total_points: Number,
        completed_lessons: [CompletedLessonSchema]
    },
    {
        timestamps: true
    }
)

const UserModel = models.User || mongoose.model("User", UserSchema)

export default UserModel