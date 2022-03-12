import * as Types from '../constants';

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
			if (action.payload.data.success) {
				return action.payload.data.data;
			}
		}
		case Types.COMPLETE_TASK: {
			const { task_id } = action.payload;
			const cloneState = JSON.parse(JSON.stringify(state));
			const result = cloneState.filter((item: any) => item._id !== task_id);
			state = result;
			return result;
		}
		case Types.DELETE_TASK: {
			const { task_id } = action.payload;
			const cloneState = JSON.parse(JSON.stringify(state));
			const result = cloneState.filter((item: any) => item._id !== task_id);
			state = result;
			return result;
		}
		default:
			return state;
	}
};
