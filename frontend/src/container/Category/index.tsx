import Category from "components/Category";
import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const CategoryContainer = () => {
    const taskDataRedux = useSelector(
        (state: RootStateOrAny) => state.TaskReducer
    );
    const [myTaskState, setMyTaskState] = useState([]);
    let myTask: any = {
        allTask: taskDataRedux.length,
    };
    useEffect(() => {
        taskDataRedux.length > 0 &&
            taskDataRedux?.map((item: any) => {
                if (myTask[item.labelData.name] === undefined) {
                    myTask[item.labelData.name] = {
                        name: item.labelData.name,
                        hashColor: item.labelData.hashColor,
                        count: 1,
                    };
                } else {
                    myTask[item.labelData.name].count++;
                }
            });
            setMyTaskState(myTask);
    }, [taskDataRedux]);
    return (
        <>
            <Category data={myTaskState} />
        </>
    );
};

export default CategoryContainer;
