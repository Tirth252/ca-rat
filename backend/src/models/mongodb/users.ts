import mongoose, { Types } from "mongoose";
import { User } from "../interfaces";
import { hash , compare  } from 'bcrypt'

interface UserMethods{
    isValidPassword:(password: string) => Promise<boolean>
}

const UserSchema = new mongoose.Schema<User, UserMethods>({
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
        type : {street: String, city: String, State: String, zip: Number}
    },
    
    });


UserSchema.pre('save', async function(next) {
    // 1) check email regex
    // 2) hash password
    // 3) set dateModified
    const hashedPassword =  await hash(this.password, 10)
    this.password = hashedPassword
    const now = new Date();
    this.dateModified = now;
});

UserSchema.method('isValidPassword', async function(
    password: string): Promise<boolean>{
    const isValid = await compare(password, this.password)
    return isValid
})



const UserModel = mongoose.model<User>("User",UserSchema)






export default UserModel