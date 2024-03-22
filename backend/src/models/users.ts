import { builtinModules } from "module";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required : true,
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
        type: Number
    }


    });

const User = mongoose.model("User",UserSchema)



interface user{
    username: string;
    password: string;
}


export default User