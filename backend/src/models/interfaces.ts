export interface User{
    username: string;
    password: string;
    email: String;
    userType: Number;// 1: Customer, 2: merchent, 3: admin, 4: superuser
    dateCreated: Date;
    dateModified: Date;
    gender: Number   // 1: Female, 2: Male, 3: Other
    }


export default User