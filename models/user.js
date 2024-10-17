import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ["user", "vendor", "admin", "superadmin"], default: "user" },
}, {
    timestamps: true
});


userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema);