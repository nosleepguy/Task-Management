import { useContext, useEffect, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import { SizeContextProvider } from "context/SizeContext";

const Category = ({ data }: any) => {
    const size = useContext(SizeContextProvider);
    const [ishow, setIsShow] = useState(true);

    const handleShowCategory = () => {
        setIsShow(!ishow);
    };
    useEffect(() => {
        if (size < 768) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [size]);
    return (
        <div
            style={ishow ? { width: "300px" } : { width: "0", padding: "15px" }}
            className={`relative bg-white h-full p-8 pt-0 text-regal-blue 
            font-medium border-r-[1px] border-gray-300 transition-all `}
        >
            {ishow ? (
                <>
                    <ArrowCircleLeft
                        onClick={handleShowCategory}
                        className="absolute bg-white top-8 right-[-12px] rounded-full text-gray-300"
                        size="25"
                        color="currentColor"
                    />
                    <h1 className="text-center text-3xl font-bold py-10">
                        My Tasks
                    </h1>
                    <div className="list-task border-t-2 pt-2 border-gray-200">
                        <div className="task flex justify-between w-full  py-2 mb-4 px-2 mt-1 rounded-md hover:bg-slate-200 transition duration-200">
                            <span>All Tasks</span>
                            <span className="bg-blue-500 px-2 py-0 text-sm text-white rounded-2xl">
                                {data.allTask}
                            </span>
                        </div>
                        {Object.keys(data).map((item: any, index: number) => {
                            if (index > 0) {
                                return (
                                    <div
                                        key={index}
                                        className="task flex justify-between py-2 px-2 mt-1 rounded-md hover:bg-slate-200 transition duration-200"
                                    >
                                        <span>{data[item]?.name}</span>
                                        <span
                                            className="bg-blue-500 px-2 py-0 text-sm text-white rounded-2xl"
                                            style={{
                                                backgroundColor:
                                                    data[item]?.hashColor,
                                            }}
                                        >
                                            {data[item]?.count}
                                        </span>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </>
            ) : (
                <ArrowCircleRight
                    onClick={handleShowCategory}
                    className="absolute bg-white top-8 right-[-12px] rounded-full text-gray-300"
                    size="25"
                    color="currentColor"
                />
            )}
        </div>
    );
};

export default Category;
