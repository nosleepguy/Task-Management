import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../../components/Loading";

const Login = React.lazy(() => import("../../components/Login"));
const Register = React.lazy(() => import("../../components/Register"));
const NotFound = React.lazy(() => import("../../components/NotFound"));

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
