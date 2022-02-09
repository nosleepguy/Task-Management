import React from "react";
import { Category, Timer, RowHorizontal, RowVertical } from "iconsax-react";
import Todo from "components/Todo";

const AlLTaskContainer = () => {
    return (
        <div className="flex flex-col p-3 pl-6 pt-6 ">
            <div>
                <input
                    className="px-3 py-2 w-full rounded-md mb-3 outline-none"
                    type="text"
                    placeholder="🔍 Search your todo..."
                />
                <div className="sort flex m-4 mt-2 justify-end">
                    <button className="p-2 bg-white rounded-[50px] mr-4">
                        <Timer
                            size="15"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                    <button className="p-2 bg-white rounded-[50px] ml-2">
                        <Category
                            size="15"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                    <button className="p-2 bg-white rounded-[50px] ml-2">
                        <RowVertical
                            size="15"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                    <button className="p-2 bg-white rounded-[50px] ml-2 mr-1">
                        <RowHorizontal
                            size="15"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                </div>
            </div>
            <div className="all-task-container flex flex-wrap justify-center w-full h-full overflow-y-scroll">
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    );
};

export default AlLTaskContainer;
