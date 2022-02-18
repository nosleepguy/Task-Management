import * as Type from "../constants";

const initialState: any = [];

export const LabelReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Type.GET_LABEL: {
            const { data } = action.payload;
            if (data.success) {
                state = data.data;
                return state;
            }
        }
        case Type.ADD_LABEL: {
            const { data } = action.payload;
            if (data.success) {
                data.data["label"] = data.data.name;
                data.data["value"] = data.data._id;
                delete data.data.createdAt;
                delete data.data.hashColor;
                delete data.data.lastModified;
                delete data.data.softDelete;
                state.push(data.data);
                return state;
            }
        }
        default:
            return state;
    }
};
