import * as Type from "./../constants";

interface action {
    type: string;
    payload: object;
}
const initialState = {};

export const TodoReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case Type.ADD_TODO: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
};
