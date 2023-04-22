import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true},
        name: String,
        email: String,
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user"],
        },
        joinedOn: {type: Date, default: Date.now()}
    },
    { collection: "users" }
);
export default userSchema;