import mongoose from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

export default async function connectToMongoDB (){
    try {
        if (MONGODB_URI) {
            mongoose.connect(MONGODB_URI, {
                dbName: "AccessibleTypingClub"
            })
        }

        console.log("Connected to DB!");
        
    } catch (error) {
        console.log("error:", error)
    }
}