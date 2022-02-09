import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getUserDataRequest, logout } from "redux/action/auth";
import { decodeJWT } from "utils/utils";

import PrivateRouter from "./private";
import PublicRouter from "./public";

const Router: React.FC = (): JSX.Element => {
    const authData = useSelector((state: RootStateOrAny) => state.AuthReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("tk");
        if (token) {
            const decoded = decodeJWT(token);
            if (decoded.email) {
                dispatch(getUserDataRequest({ email: decoded.email }));
            } else {
                dispatch(logout());
            }
        }
    }, []);

    return localStorage.getItem("tk") && authData ? (
        <PrivateRouter />
    ) : (
        <PublicRouter />
    );
};

export default Router;
