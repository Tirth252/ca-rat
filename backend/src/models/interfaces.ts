import { Types } from 'mongoose';

export interface User{
    _id : String
    username: string;
    password: string;
    email: String;
    userType: Number;// 1: Customer, 2: merchent, 3: admin, 4: superuser
    dateCreated: Date;
    dateModified: Date;
    gender: Number;   // 1: Female, 2: Male, 3: Other
    addresses: Object,
    }

export interface Jewelry{
    _id : String;
    name: String;
    category: Number, // 1: necklace, 2: Ring, 3: Pendent, 4: Earings, 5: Belt buckles        
    price: Number;
    merchant: Object;
    discription: String;
    availColors: Array<String>;
    availSize: Array<Number>;
    refNo : Number;
    images: Array<String>
    dateCreated: Date;
    dateModified: Date;
    dimondDetails:{
        color: Array<String>,
        clarity: String,
        weight: Number,
    }
    jewelryDetails : {
        goldWeight: Number,
        goldPurity: Number,
        goldColor: Array<Number>
    }
    
}
    