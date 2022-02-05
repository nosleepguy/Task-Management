import React from "react";
import Footer from "./components/Footer";
import AddTaskContainer from "./container/AddTask";
import CompleteTaskContiner from "./container/CompleteTask";
import CurrentTaskContainer from "./container/CurrentTask";

const App = () => {
    return (
        <div className="relative w-scren h-screen bg-[url('https://nmhung1234.github.io/TodoList2/static/media/back-01.19e791ec.png')] bg-cover bg-center">
            <div className="row flex flex-col md:flex-row w-full">
                <AddTaskContainer />
                <CurrentTaskContainer />
                {/* </div>
            <div className="row basis-1/2"> */}
            </div>
            <div className="row flex flex-col md:flex-row w-full">
                <CompleteTaskContiner />
            </div>
            <Footer />
        </div>
    );
};

export default App;
