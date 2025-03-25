
//AiContentModel.js
const mongoose = require("mongoose");

const AiContentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, default: "" },
    imageUrl: { type: String, required: true },
    link: { type: String, required: true },
    type: { type: String, required: true },
    priceType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    rating: { 
        type: Number, 
        default: 0, 
        min: 0, 
        max: 5
    },
    review: { type: String, default: "" }
});

const AiContent = mongoose.model("AiContent", AiContentSchema);

module.exports = AiContent;
