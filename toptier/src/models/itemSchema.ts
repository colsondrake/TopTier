import mongoose, { Schema, Document, Model } from "mongoose";

// Create the interface for item
interface IItem extends Document {
    owner: number;
    game: string;
    wins: number;
}

// Item schema to hold data members in an item
const itemSchema = new Schema<IItem>({
    owner: { // This will be the user's id
        type: Number,
    },
    game: {
        type: String,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
});

// Construct the model and export it for use
const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
