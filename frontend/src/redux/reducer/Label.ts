import { notify } from 'utils/notify';
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
		case Type.UPDATE_LABEL: {
			const { data, payload } = action;
			let cloneState = JSON.parse(JSON.stringify(state));
			if (payload.data.success) {
				const index = cloneState.findIndex(
					(item: any) => item._id === data.label_id
				);
				cloneState[index] = data;
				state = cloneState;
				return cloneState;
			}
		}
		case Type.DELETE_LABEL: {
			const { res, label_id  } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			if (res?.data?.success) {
				cloneState = cloneState.filter((item: any) => item._id !== label_id);
				state = cloneState;
				return cloneState;
			}else{
				notify('error', res?.data?.message);
			}
		}
		default:
			return state;
	}
};
