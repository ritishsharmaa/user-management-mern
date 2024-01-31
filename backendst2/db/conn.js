import mongoose from "mongoose";

export function connect() {
    mongoose.connect('mongodb+srv://ritishs522:ritish@cluster0.quwgl6h.mongodb.net/').then
        (res => console.log("db connected")).catch(err => console.log(err))
}