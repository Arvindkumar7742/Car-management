const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        carOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        tags: {
            type: [String],
            required: true
        },
        carType: {
            type: String,
            default:""
        },
        company:{
            type: String,
            default:""
        },
        dealer:{
            type:String,
            default:""
        },
        images: {
            type: [String],
        }
    }
);

module.exports = mongoose.model("car", carSchema);