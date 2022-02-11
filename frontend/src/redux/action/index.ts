import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { notify } from "utils/notify";
import axios from "./../../utils/customAxios";

import * as Type from "./../constants";

export interface AddLabel {
    type: Type.ADD_LABEL;
    payload: object;
}

export const addTaskAction = (payload: any) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
        try {
            axios.post("/tasks", payload).then((res) => {
                dispatch({
                    type: Type.ADD_TASK,
                    payload: res,
                });
                notify("success", "Task added successfully");
            });
        } catch (error) {
            notify("error", "Add Task Failed!");
        }
    };
};

export const addLabelAction = (payload: object) => {
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        try {
            axios.post("/label", payload).then((res) => {
                dispatch({
                    type: Type.ADD_LABEL,
                    payload: res,
                });
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export const getLabelAction = (payload: any) => {
    return (
        dispatch: ThunkDispatch<{}, {}, AnyAction>,
        getState: () => any
    ) => {
        try {
            axios.get(`/label?owner_id=${payload.owner_id}`).then((res) => {
                dispatch({
                    type: Type.GET_LABEL,
                    payload: res,
                });
                notify("success", "Get label success");
            });
        } catch (err) {
            console.error(err);
        }
    };
};
