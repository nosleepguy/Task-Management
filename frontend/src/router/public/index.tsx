import Loading from "components/Loading";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("container/Login"));
const Register = React.lazy(() => import("container/Register"));
const NotFound = React.lazy(() => import("components/NotFound"));

const PublicRouter = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Suspense>
    );
};

export default PublicRouter;
