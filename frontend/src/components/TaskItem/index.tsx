import { Edit, CardTick1, Flash, Coffee, Alarm } from "iconsax-react";
import { formatTimeString } from "utils/utils";

interface TaskItemProps {
    completed: boolean;
    content: string;
    createdAt: string;
    deadline: string;
    labelData: {
        createdAt: string;
        hashColor: string;
        name: string;
        _id: string;
    };
    lastModified: string;
    owner_id: string;
    status: 3;
    _id: string;
}
const StatusList = [
    {
        content: "Hand Free",
        color: "#2563eb",
        icon: (
            <Coffee className="mr-2" size="20" color="#2563eb" variant="Bold" />
        ),
        id: 1,
    },
    {
        content: "Working",
        color: "#f59e0b",
        icon: (
            <Flash className="mr-2" size="20" color="#f59e0b" variant="Bold" />
        ),
        id: 2,
    },
    {
        content: "Hot Water",
        color: "#dc2626",
        icon: (
            <Alarm className="mr-2" size="20" color="#dc2626" variant="Bold" />
        ),
        id: 3,
    },
];
const TaskItem = (props: any): JSX.Element => {
    const { data } = props;
    const timeFomarted = formatTimeString(data.deadline);
    return (
        <div className="overflow-hidden border-slate-400 h-fit w-72 max-w-md rounded-md bg-white mr-3 mb-3 grow drop-shadow-[0_10px_10px_#9c9c9c18]"
        >
            <div
                className="w-full h-1 bg-sky-500"
                style={{ backgroundColor: `${data.labelData.hashColor}` }}
            ></div>
            <div className="wrapper p-5">
                <div className="flex">
                    <div className="label">
                        <button
                            className="bg-blue-100 text-blue-600 group flex rounded items-center w-fit p-1.5 mr-3 px-2 text-sm"
                            style={{ color: `${data.labelData.hashColor}` }}
                        >
                            {data.labelData.name }
                        </button>
                    </div>
                    <div className="tag">
                        <button
                            className="bg-blue-100 text-blue-600 group flex rounded items-center w-fit p-1.5 px-2 text-sm"
                            style={{
                                color: `${StatusList[data.status - 1].color}`,
                            }}
                        >
                            {StatusList[data.status - 1].icon}
                            {StatusList[data.status - 1].content}
                        </button>
                    </div>
                </div>
                <div className="content leading-8 text-regal-blue">
                    <p className="py-3 pb-2 text-truncate overflow-hidden">
                        {data.content}
                    </p>
                    <hr />
                    <div className="deadline">
                        <p className="whitespace-nowrap pt-2">
                            Dealine:{" "}
                            {`${timeFomarted.hours}:${timeFomarted.minutes} ${timeFomarted.ampm}`}{" "}
                            -{" "}
                            {`${timeFomarted.day} - ${timeFomarted.date}/${timeFomarted.month}/${timeFomarted.year}`}
                        </p>
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
                        {StatusList[data.status - 1].icon}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
