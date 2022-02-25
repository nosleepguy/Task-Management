import * as Type from '../constants';

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
			let cloneState = JSON.parse(JSON.stringify(state));
			if (data.success) {
				data.data['label'] = data.data.name;
				data.data['value'] = data.data._id;
				delete data.data.createdAt;
				delete data.data.lastModified;
				delete data.data.softDelete;
				cloneState.push(data.data);
				state = cloneState;
				return cloneState;
			}
		}
		case Type.DELETE_LABEL: {
			const { res, label_id  } = action.payload;
            console.log("🚀 ~ file: Label.ts ~ line 30 ~ LabelReducer ~ data", res, label_id);
			let cloneState = JSON.parse(JSON.stringify(state));
			if (res.data.success) {
				cloneState = cloneState.filter((item: any) => item._id !== label_id);
				state = cloneState;
				return cloneState;
			}
		}
		default:
			return state;
	}
};
