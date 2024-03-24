import { builtinModules } from "module";
import mongoose from "mongoose";
import { json } from "stream/consumers";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
    },
    password:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required : true,
        unique : true,
    },
    // 1: Customer, 2: merchent, 3: admin, 4: superuser
    userType: {  
        type: Number,
        required : true,
    },
    dateCreated:{
        type: Date,
    },
    dateModified:{
        type: Date,
    },
    // 1: Female, 2: Male, 3: Other
    gender: {
        type: Number,
    },
    addresses : {
        type : Array,
    },
    });

const UserModel = mongoose.model("User",UserSchema)

export default UserModel