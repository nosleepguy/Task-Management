import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import AddTaskPage from "../../pages/addTask";
import NotFound from "../../components/NotFound";

const PrivateRouter = () => {
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
