import mongoose from "mongoose";

export default async function connectToDb(app) {
    try {
        await mongoose.connect(
            "mongodb+srv://caothinh2k03:HvpeY3apJ9N2H384@cluster0.mg6lbim.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Connect success");
    } catch (error) {
        console.log("Connect error\n", error);
    }
}
