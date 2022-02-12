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

export const formatTimeString = (dateISO: string) => {
    const dateConverted = new Date(dateISO);
    let hours = dateConverted.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = `0${dateConverted.getMinutes()}`.slice(-2);
    let seconds = `0${dateConverted.getSeconds()}`.slice(-2);
    let date = `0${dateConverted.getDate()}`.slice(-2);
    let month = `0${dateConverted.getMonth() + 1}`.slice(-2);
    let year = dateConverted.getFullYear();
    let current_day: number | string = dateConverted.getDay();
    const convertDay = (current_day: number | string) => {
        switch (current_day) {
            case 0:
                current_day = "Sun";
                break;
            case 1:
                current_day = "Mon";
                break;
            case 2:
                current_day = "Tue";
                break;
            case 3:
                current_day = "Wed";
                break;
            case 4:
                current_day = "Thu";
                break;
            case 5:
                current_day = "Fri";
                break;
            case 6:
                current_day = "Sat";
        }
        return current_day;
    };
    let day = convertDay(current_day);
    return { year, month, date, day, hours, ampm, minutes, seconds };
};
