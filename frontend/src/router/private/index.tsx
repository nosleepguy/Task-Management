import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("pages/Home"));
const AddTaskPage = lazy(() => import("pages/AddTask"));
const ManageLabelPage = lazy(() => import("pages/ManageLabel"));
const NotFound = lazy(() => import("components/NotFound"));

import Loading from "components/Loading";

const PrivateRouter = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-task" element={<AddTaskPage />} />
                <Route path='/manage-label' element={<ManageLabelPage />} />
                {/* <Route path="/complete-task" element={<CompleteTaskPage />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default PrivateRouter;
