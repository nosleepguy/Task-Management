import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("pages/Home"));
const AddTaskPage = lazy(() => import("pages/AddTask"));
const DetailTaskPage = lazy(() => import("pages/DetailTask"));
const NotFound = lazy(() => import("components/NotFound"));

import Loading from "components/Loading";

const PrivateRouter = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-task" element={<AddTaskPage />} />
                <Route path="/:label/:id" element={<DetailTaskPage />} />
                {/* <Route path="/complete-task" element={<CompleteTaskPage />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default PrivateRouter;
