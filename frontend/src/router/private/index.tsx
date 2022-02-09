import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getUserDataRequest, logout } from "redux/action/auth";
import HomePage from "pages/home";
import AddTaskPage from "pages/addTask";
import NotFound from "components/NotFound";
import { decodeJWT } from "utils/utils";

const PrivateRouter = () => {
    const dataUser = useSelector((state: RootStateOrAny) => state.AuthReducer);


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
            {/* <Route path="/complete-task" element={<CompleteTaskPage />} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default PrivateRouter;
