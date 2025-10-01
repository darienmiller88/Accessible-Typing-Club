import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: String,
        first_name: String,
        last_name: String
    },
    {
        timestamps: true
    }
)

const UserModel = models.User || mongoose.model("User", UserSchema)

export default UserModel