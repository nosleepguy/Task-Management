import jwt_decode from "jwt-decode";

export interface decodeJWTType {
    email?: string;
    exp?: number;
    iat?: number;
    id?: string;
    type?: number;
}

export const decodeJWT = (token: string): any => {
    try {
        return jwt_decode(token);
    } catch (error) {
        return false;
    }
};
