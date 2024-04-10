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
    price: Number;
    merchant: Object;
    discription: String;
    availColors: Array<String>;
    availSize: Array<Number>;
    refNo : Number;
    images: Array<String>
    dateCreated: Date;
    dateModified: Date;
    
}
    