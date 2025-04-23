import mongoose, { Schema, Document, Model } from "mongoose";

// Create the interface for item
interface IItem extends Document {
    userIdentification: string;
    game: string;
    winCount: string;
}

// Item schema to hold data members in an item
const itemSchema = new Schema<IItem>({
    userIdentification: { 
        type: String,
    },
    game: {
        type: String,
        required: true,
    },
    winCount: {
        type: String,
        required: true,
    },
});

// Construct the model and export it for use
const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;
