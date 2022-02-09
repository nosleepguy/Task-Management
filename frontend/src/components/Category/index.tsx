
const Category = () => {
    return (
        <div className="bg-sky-100 min-w-max h-full p-4 pt-0 text-regal-blue font-medium">
            <h1 className="text-center text-3xl font-bold py-10">My Tasks</h1>
            <div className="list-task border-t-2 border-gray-200">
                <div className="task flex justify-between w-48  py-2 px-1 mt-1 rounded-md hover:bg-slate-200 transition duration-200">
                    <span>All Tasks</span>
                    <span className="bg-blue-500 px-2 py-0 text-sm text-white rounded-2xl">
                        100
                    </span>
                </div>
                <div className="task flex justify-between py-2 px-1 mt-1 rounded-md hover:bg-slate-200 transition duration-200">
                    <span>Manager</span>
                    <span className="bg-blue-500 px-2 py-0 text-sm text-white rounded-2xl">
                        20
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Category;
