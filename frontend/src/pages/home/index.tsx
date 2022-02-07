import React from "react";
import AlLTaskContainer from "../../container/AllTask";
import CategoryContainer from "../../container/Category";

const HomePage = () => {
    return (
        <div className="flex h-[calc(100vh-64px)] bg-slate-100">
            <CategoryContainer />
            {/* <div className="allTasks"> */}
            <AlLTaskContainer />
            {/* </div> */}
        </div>
    );
};

export default HomePage;
