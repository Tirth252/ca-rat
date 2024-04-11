import mongoose, { Schema  } from "mongoose";
import {Jewelry} from "../interfaces";


const JewelrySchema = new mongoose.Schema<Jewelry>({
    name: {
        type: String,
        require: true,
    },
    category: {
        type: Number, // 1: necklace, 2: Ring, 3: Pendent, 4: Earings, 5: Belt buckles
        require:true,
    },
    price: {
        type: Number,
        required: true,
    },
    merchant: {
        type: Schema.ObjectId, 
        ref: "users",
        required: true,
    },
    discription: {
        type: String,
        required: true,
        minlength: 5,
    },
    availSize: [{
        type: String,
    }],
    images:  [{
        type: String
    }],
    dateCreated:{
        type: Date,
        default : Date.now,
    },
    dateModified:{
        type: Date,
        default : Date.now,
    },
    dimondDetails: {
        type : {
            color: Array<String>,
            clarity: String,
            weight: Number,
        }
    },
    jewelryDetails: {
        type : {
            goldWeight: Number,
            goldPurity: Number,
            goldColor: Array<Number>, // 1: gold, 2: Rose gold, 3: white gold
        }
    }
    });


JewelrySchema.pre('save',function(next) {
    const now = new Date();
    this.dateModified = now;
    next()
})

const JewelryModel = mongoose.model<Jewelry>("Jewelry",JewelrySchema)

export default JewelryModel