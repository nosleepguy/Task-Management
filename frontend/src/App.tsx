
import Footer from "components/Footer";
import Navigation from "components/Navigation";
// import AddTaskContainer from "container/AddTask";
// import CompleteTaskContiner from "container/CompleteTask";
// import CurrentTaskContainer from "container/CurrentTask";
import Router from "router";

const App = () => {
    return (
        <div className="relative w-scren h-screen">
            <Navigation />
            <Router />
            {/* <div className="row flex flex-col md:flex-row w-full">
                <AddTaskContainer />
                <CurrentTaskContainer />
            </div>
            <div className="row flex flex-col md:flex-row w-full">
                <CompleteTaskContiner />
            </div> */}
            {/* <Footer /> */}
        </div>
    );
};

export default App;
