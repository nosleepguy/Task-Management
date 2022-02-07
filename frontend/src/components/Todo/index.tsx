import { Edit, CardTick1, Coffee } from "iconsax-react";

const Todo = (): JSX.Element => {
    return (
        <div className="overflow-hidden rounded-md bg-white mr-3 mb-3 w-72 grow drop-shadow-[0_10px_10px_#9c9c9c18]">
            <div className="w-full h-1 bg-sky-500"></div>
            <div className="wrapper p-5">
                <div className="tag">
                    <button
                        className={`${"bg-blue-100 text-blue-600"} group flex rounded items-center w-fit p-1.5 px-2 text-sm`}
                    >
                        <Coffee
                            className="mr-2"
                            size="20"
                            color="currentColor"
                            variant="Bold"
                        />
                        Hand Free
                    </button>
                </div>
                <div className="content py-3 leading-8 text-regal-blue">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis, harum?
                    </p>
                    <div className="deadline">
                        <p>Dealine: 12/10/2021 vào lúc 18 giờ</p>
                    </div>
                </div>
                <div className="action flex">
                    <button className="flex jusify-center items-center mt-3 pr-3 rounded text-gray-500 hover:text-blue-600">
                        <Edit
                            className="mr-2"
                            size="20"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                    <button className="flex jusify-center items-center mt-3 pr-3 rounded text-gray-500 hover:text-blue-600">
                        <CardTick1
                            className="mr-2"
                            size="20"
                            color="currentColor"
                            variant="Outline"
                        />
                    </button>
                    <button className="flex jusify-center items-center mt-3 pr-3 rounded text-blue-600">
                        <Coffee
                            className="mr-2"
                            size="20"
                            color="currentColor"
                            variant="Bold"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
