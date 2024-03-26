import { builtinModules } from "module";
import mongoose from "mongoose";
import { json } from "stream/consumers";
import User from "../interfaces";

const UserSchema = new mongoose.Schema<User>({
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
        default : Date.now,
    },
    dateModified:{
        type: Date,
        default : Date.now,
    },
    // 1: Female, 2: Male, 3: Other
    gender: {
        type: Number,
    },
    addresses : {
        type : Array<any>
    },
    });


UserSchema.pre('save',function(next) {
    // 1) check email regex
    // 2) hash password
    // 3) set dateModified
    console.log("wasd")
})

const UserModel = mongoose.model<User>("User",UserSchema)






export default UserModel