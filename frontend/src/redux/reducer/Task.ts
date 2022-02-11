import * as Type from "../constants";

interface action {
    type: string;
    payload: object;
}
const initialState = {};

export const TaskReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case Type.ADD_TASK: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
};
