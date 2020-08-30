import { Model } from 'mongoose';
import { UserDetails } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDetails>);
    insertUser(fullName: string, email: string, passward: string, userTypeId: string): Promise<UserDetails>;
}
