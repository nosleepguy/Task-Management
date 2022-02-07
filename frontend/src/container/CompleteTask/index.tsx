import React from "react";
import { Trash } from "iconsax-react";

const CompleteTaskContiner = () => {
    return (
        <div className="rounded-md morphin p-5 w-100 md:w-[calc(50%-30px)] mx-5">
            <h1 className="text-center text-4xl font-bold h-16">Complete Task</h1>
            <button className="flex p-3 mt-5 bg-red-500 rounded-md text-white">
                <Trash
                    className="mr-2"
                    size="25"
                    color="currentColor"
                    variant="Outline"
                />
                Delete All
            </button>
        </div>
    );
};
export default CompleteTaskContiner;
