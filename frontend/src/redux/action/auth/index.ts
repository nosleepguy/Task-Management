import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import axios from "./../../../utils/customAxios";
import * as Types from "./../../constants";

export const loginRequest = (payload: any) => {
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        try {
            axios.post("/login", payload).then((res) => {
                console.log(res);
                dispatch({
                    type: Types.LOGIN,
                    payload: res,
                });
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export const getUserDataRequest = (payload: any) => {
console.log("🚀 ~ file: index.ts ~ line 27 ~ getUserDataRequest ~ payload", payload)
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        try {
            axios.get(`/user?email=${payload.email}`).then((res) => {
                console.log(res);
                dispatch({
                    type: Types.GET_USER_DATA,
                    payload: res,
                });
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const logout = () => {
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        dispatch({
            type: Types.LOGOUT,
        });
    };
};
