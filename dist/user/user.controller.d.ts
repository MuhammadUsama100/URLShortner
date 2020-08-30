import { UserService } from './user.service';
import { UserRequest } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(userRequest: UserRequest): Promise<{
        status: boolean;
        msg: string;
        newUser: import("./user.model").UserDetails;
    }>;
}
