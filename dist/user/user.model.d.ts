import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any>;
export interface UserDetails extends mongoose.Document {
    email: string;
    fullName: string;
    passward: string;
    userTypeId: string;
}
export declare class UserRequest {
    email: string;
    fullName: string;
    passward: string;
    userTypeId: string;
}
