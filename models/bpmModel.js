import mongoose from "mongoose";

const Schema = mongoose.Schema;
export const BlogSchema = new Schema({
    blogContent: {
        type: String,
        required: 'Please enter the mandatory Blog text'
    },
    bloggedDate: {
        type: Date,
        default: Date.now
    },
});