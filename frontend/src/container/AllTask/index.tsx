import { useEffect, useState } from "react";
import { Category, Timer, RowHorizontal, RowVertical } from "iconsax-react";
import TaskItem from "components/TaskItem";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getAllTaskAction } from "redux/action/task";

const AlLTaskContainer = () => {
    const dispatch = useDispatch();
    const dataAuthRedux = useSelector(
        (state: RootStateOrAny) => state.AuthReducer
    );
    const taskDataRedux = useSelector(
        (state: RootStateOrAny) => state.TaskReducer
    );
    const [sortByDeadline, setSortByDeadline] = useState<Boolean>(false);
    const [stateTaskSort, setStateTaskSort] = useState([]);

    useEffect(() => {
        if (sortByDeadline) {
            const clone = JSON.parse(JSON.stringify(taskDataRedux));
            const sorted = clone.sort((a: any, b: any) => {
                return (
                    new Date(a.deadline).getTime() -
                    new Date(b.deadline).getTime()
                );
            });
            setStateTaskSort(sorted);
        } else {
            const clone = JSON.parse(JSON.stringify(taskDataRedux));
            setStateTaskSort(clone);
        }
    }, [sortByDeadline]);

    useEffect(() => {
        const clone = JSON.parse(JSON.stringify(taskDataRedux));
        setStateTaskSort(clone);
    }, [taskDataRedux]);

    useEffect(() => {
        const payload = { owner_id: dataAuthRedux._id };
        dataAuthRedux._id && dispatch(getAllTaskAction(payload));
        setStateTaskSort(dataAuthRedux);
    }, [dataAuthRedux]);
    return (
        <div className="flex flex-col p-3 pl-6 pt-6 w-full">
            <div>
                <input
                    className="px-3 py-2 w-full rounded-md mb-3 outline-none"
                    type="text"
                    placeholder="🔍 Search your task..."
                />
                <div className="sort flex m-4 mt-2 justify-end">
                    <button
                        className={`p-2 rounded-[50px] mr-4 ${
                            sortByDeadline ? "bg-ex-purple-300" : "bg-white"
                        }`}
                        onClick={() => setSortByDeadline(() => !sortByDeadline)}
                    >
                        <Timer
                            size="15"
                            color="currentColor"
                            variant={`${sortByDeadline ? "Bulk" : "Outline"}`}
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
            <div className="all-task-container flex flex-wrap w-full h-full overflow-y-scroll justify-start">
                {stateTaskSort.length > 0 &&
                    stateTaskSort?.map((item: any, index: number) => (
                        <TaskItem key={index} data={item} />
                    ))}
            </div>
        </div>
    );
};

export default AlLTaskContainer;
