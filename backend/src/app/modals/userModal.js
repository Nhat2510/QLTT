import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        birthday: { type: Date, default: Date.now },
        sex: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        role: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
