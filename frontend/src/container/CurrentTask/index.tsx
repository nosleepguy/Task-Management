import React from "react";
import { TickCircle, Sort } from "iconsax-react";
import TaskItem from "components/TaskItem";

const CurrentTaskContainer = (): JSX.Element => {
    const [isShowSort, setIsShowSort] = React.useState(false);
    const handleShowSort = (): void => {
        setIsShowSort(!isShowSort);
    };

    return (
        <div className="rounded-md m-5 ml-5 mt-0 md:ml-0 md:mt-5 morphin px-5 py-7 basis-1/2">
            <h1 className="text-center text-4xl font-bold h-16">
                Current Task
            </h1>
            <span className="text-xs inline-block py-1 px-1.5 mb-1 mt-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
                Search
            </span>
            <input
                className="px-3 py-2 w-full rounded-md mb-3 morphin outline-none border-2 border-gray-300"
                type="text"
                placeholder="🔍 Search your task..."
            />
            <div className="flex">
                <button className="flex px-3 py-2 bg-sky-500 rounded text-white">
                    <TickCircle
                        className="mr-2"
                        size="25"
                        color="currentColor"
                        variant="Outline"
                    />
                    Done All
                </button>
                <div className="dropdown" id="lightdropdown">
                    <div className="relative z-10">
                        <button
                            className="flex items-center px-3 py-2 mx-3 bg-green-600 rounded text-white hover:bg-green-700 focus:ring focus:ring-violet-300"
                            onClick={handleShowSort}
                        >
                            Sort by
                            <Sort
                                className="ml-2"
                                size="20"
                                color="currentColor"
                                variant="Outline"
                            />
                        </button>
                        <ul
                            className={`absolute left-3 dropdown-list mt-1 z-20 cursor-pointer ${
                                isShowSort ? "visible" : "hidden"
                            }`}
                        >
                            <li
                                className="px-3 py-2 bg-white border-x-2 border-t-2 border-gray-300 hover:bg-green-200 rounded-t"
                                data-value="Option A"
                            >
                                Deadline
                            </li>
                            <li
                                className="px-3 py-2 bg-gray-100 border-x-2 border-gray-300 hover:bg-green-200"
                                data-value="Option B"
                            >
                                Important
                            </li>
                            <li
                                className="px-3 py-2 bg-white border-x-2 border-b-2 border-gray-300 hover:bg-green-200 rounded-b"
                                data-value="Option C"
                            >
                                Create Time
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <TaskItem />
        </div>
    );
};

export default CurrentTaskContainer;
