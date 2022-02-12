import { notify } from "utils/notify";
import * as Types from "../constants";

const initialState = {};

export const TaskReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.ADD_TASK: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case Types.GET_ALL_TASK: {
            console.log(action.payload);
            if (action.payload.data.success) {
                return action.payload.data.data;
            } else {
                notify("error", "Get Task Failed!");
            }
        }
        default:
            return state;
    }
};
