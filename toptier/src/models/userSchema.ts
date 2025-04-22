import mongoose, { Schema, Document, Model } from "mongoose";

// Create the interface for user
interface IUser extends Document {
    id: number;
    username: string;
    password: string;
}

// User schema to hold data members in a user
const userSchema = new Schema<IUser>({
    id: { // This will be the user's id
        type: Number,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Construct the model and export it for use
const User: Model<IUser> = mongoose.models.Item || mongoose.model<IUser>("Item", userSchema);
export default User;