import React from "react";
import PrivateRouter from "./private";
import PublicRouter from "./public";

const Router: React.FC = (): JSX.Element => {
    return localStorage.getItem("tk") ? <PrivateRouter /> : <PublicRouter />;
};

export default Router;
