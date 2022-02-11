
import jwt from "jsonwebtoken";
import { ObjectId } from 'mongodb';
import { db } from '../../repositories/index.js';
import signUpTemplate from '../../template/signUp.template.js';
import User from '../../models/user.model.js';
import { generatePassword, checkPassword, sendMail, responseSuccess, responseError } from '../../Utils/index.js';
import { AuthError, CommonError, UserError } from '../../common/error/index.js';
import { UserStatus } from '../../common/enum.js';
const UserModal = new User();
export default class UserServices {
    async login(email, password) {
        try {
            const userFound = await db.user.findOne({ email: email });
            if (userFound) {
                let checkpass = checkPassword(password, userFound.salt, userFound.password);
                if (checkpass) {
                    let user = await db.user.aggregate([
                        {
                            $match: {
                                email: userFound.email
                            }
                        },
                        {
                            $unset: ["password", "salt"]
                        },
                    ]).toArray();
                    if (user[0].status == 0) {
                        return UserError.LOGIN_SNS_VERIFY_EMAIL
                    } else if (user[0].status == 1) {
                        const userData = user[0];
                        const token = UserModal.generateToken(userFound._id, userFound.email, userFound.type)
                        const refreshToken = UserModal.generateRefreshToken(userFound._id, userFound.email, userFound.type)
                        return responseSuccess({ userData, token, refreshToken })
                    } else {
                        return responseError(UserError.ACCOUNT_LOCKED)
                    }
                } else {
                    return responseError(UserError.LOGIN_WRONG_PASSWORD);
                }
            } else {
                return responseError(UserError.LOGIN_WRONG_USERNAME)
            }
        } catch (error) {
            return responseError(error || UserError.UNKNOWN_ERROR)
        }
    }
    async register(email, password) {
        try {
            const findEmail = await db.user.findOne({ "email": email });

            if (findEmail?.email) {
                return UserError.EMAIL_EXISTING;
            } else {
                const genPass = generatePassword(password);
                const newUser = new User(email, genPass.hassedPassword, genPass.salt);
                const userInserted = await db.user.insertOne(newUser);
                const token = UserModal.generateToken(userInserted.insertedId.toString(), newUser.email, newUser.type);

                const mailOptions = {
                    from: process.env.EMAIL_SERVER,
                    to: newUser.email,
                    ...signUpTemplate(`${process.env.DOMAIN}/api/verify-account?token=${token}`)
                }
                sendMail(mailOptions);
                return responseSuccess("", "Đăng ký thành công. Vui lòng kiểm tra Email");
            }
        } catch (error) {
            return responseError(error || UserError.UNKNOWN_ERROR)
        }
    }
    async verify(tokenParam) {
        jwt.verify(tokenParam, process.env.PRIVATE_KEY, (err, decoded) => {
            if (decoded) {
                try {
                    const id = decoded.id;
                    const email = decoded.email;
                    const type = decoded.type;
                    db.user.updateOne({ _id: ObjectId(id) }, { $set: { status: UserStatus.VERIFY } });
                    return responseSuccess("", "Xác minh thành công")
                } catch (error) {
                    return responseError(error || CommonError.UNKNOWN_ERROR)
                }
            } else if (err.message == "jwt expired") {
                return responseError(AuthError.TOKEN_EXPIRED);
            } else {
                return responseError(AuthError.TOKEN_INVALID)
            }
        })
    }
    async refreshToken(refreshToken) {
        try {
            const decoded = jwt.verify(refreshToken, process.env.PRIVATE_KEY, { ignoreExpiration: true });
            const { id, email, type } = decoded;
            const token = jwt.sign({
                id, email, type
            }, process.env.PRIVATE_KEY, {
                expiresIn: Number(process.env.TOKEN_LIFE)
            })
            return (responseSuccess(token))
        } catch (err) {
            // console.log(err);
            if (err.message == "jwt expired") {
                return (responseError(AuthError.TOKEN_EXPIRED));
            } else {
                return (responseError(AuthError.TOKEN_INVALID))
            }
        }
    }
    async getUserData(email) {
        try {
            const data = await db.user.aggregate([
                {
                    '$match': {
                        'email': `${email}`
                    }
                }, {
                    '$unset': [
                        'password', 'salt'
                    ]
                }
            ]).toArray();
            return responseSuccess(data);

        } catch (error) {
            return responseError(error || UserError.UNKNOWN_ERROR)
        }
    }
}
