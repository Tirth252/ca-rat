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
    }
    });

const User = mongoose.model("User",UserSchema)



interface user{
    username: string;
    password: string;
}


export default User