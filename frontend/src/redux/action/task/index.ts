import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { notify } from "utils/notify";
import axios from "utils/customAxios";
import * as Types from "redux/constants";

export const addTaskAction = (payload: any) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
        try {
            axios.post("/tasks", payload).then((res) => {
                dispatch({
                    type: Types.ADD_TASK,
                    payload: res,
                });
                notify("success", "Task added successfully");
            });
        } catch (error) {
            notify("error", "Add Task Failed!");
        }
    };
};

export const getAllTaskAction = (payload: any) => {
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        try {
            axios.get(`/tasks?owner_id=${payload.owner_id}`).then((res) => {
                dispatch({
                    type: Types.GET_ALL_TASK,
                    payload: res,
                });
            });
        } catch (error) {
            notify("error", "Get Tasks Failed!");
        }
    };
};
