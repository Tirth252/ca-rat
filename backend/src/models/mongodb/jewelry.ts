import mongoose from "mongoose";
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
        type: Object,
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

    });


JewelrySchema.pre('save',function(next) {
    
    
})

const JewelryModel = mongoose.model<Jewelry>("Jewelry",JewelrySchema)






export default JewelryModel