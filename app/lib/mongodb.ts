import mongoose from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;
let isConnected: boolean = false

export default async function connectToMongoDB (){
    if (isConnected) {
        console.log("Already connected!");
        
        return;
    }

    console.log(isConnected);
    console.log("uri:", MONGODB_URI);
    

    try {
        if (MONGODB_URI) {
            mongoose.connect(MONGODB_URI, {
                dbName: "AccessibleTypingClub"
            })

            isConnected = true
            console.log("connected:", isConnected);
            
        }

        console.log("Connected to DB!");
    } catch (error) {
        console.log("error:", error)
    }
}