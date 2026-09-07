import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {type: string, required: true},
    author: {type: string, required: true},
    price: {type: Number, required: true},
    stock: {type: Number},
})

export default mongoose.model("Book", schema);