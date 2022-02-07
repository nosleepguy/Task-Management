import jwt from "jsonwebtoken";
import { UserStatus, UserType } from "../common/enum.js";
import { generateTime } from '../Utils/index.js';
export default class User {
    constructor(email, password, salt) {
        this.email = email;
        this.name = email;
        this.sex = 0;
        this.labels = [];
        this.avatar = null;
        this.type = UserType.USER;
        this.status = UserStatus.UNVERIFY;
        this.password = password;
        this.salt = salt;
        this.createdAt = generateTime();
        this.updateAt = generateTime();
    }
    generateToken(id, email, type) {
        const token = jwt.sign({
            id, email, type
        }, process.env.PRIVATE_KEY, {
            expiresIn: Number(process.env.TOKEN_LIFE)
        })
        return token
    }
    generateRefreshToken(id, email, type) {
        const refreshToken = jwt.sign({
            id, email, type
        }, process.env.PRIVATE_KEY, {
            expiresIn: Number(process.env.REFRESHTOKEN_LIFE)
        })
        return refreshToken
    }

}
