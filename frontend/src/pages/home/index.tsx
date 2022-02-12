import React from "react";
import AllTaskContainer from "container/AllTask";
import CategoryContainer from "container/Category";

const HomePage = () => {
    return (
        <div className="flex h-[calc(100vh-64px)] bg-[#F7F8FE]">
            <CategoryContainer />
            {/* <div className="allTasks"> */}
            <AllTaskContainer />
            {/* </div> */}
        </div>
    );
};

export default HomePage;
