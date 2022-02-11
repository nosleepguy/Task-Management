import * as Type from "../constants";

const initialState = {};

export const LabelReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Type.GET_LABEL: {
            if (action.payload.data.success) {
                console.log(action.payload.data.data)
                return action.payload.data.data;
            }
        }
        default:
            return state;
    }
};
