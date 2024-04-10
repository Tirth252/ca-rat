import mongoose, { Schema  } from "mongoose";
import {Jewelry, User} from "../interfaces";


    

const JewelrySchema = new mongoose.Schema<Jewelry>({
    name: {
        type: String,
        require: true,
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
    availColors: [{
        type: String,
    }],
    availSize: [{
        type: String,
    }],
    refNo: {
        type: Number,
        required: true,
    } ,
    images:  [{
        type: <String>
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
            stone: String,
            color: Array<String>,
            clarity: String,
            carat: Number,
        }
    },
    });


JewelrySchema.pre('save',function(next) {
    const now = new Date();
    this.dateModified = now;
    
})

const JewelryModel = mongoose.model<Jewelry>("Jewelry",JewelrySchema)






export default JewelryModel