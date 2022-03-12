import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as Types from 'redux/constants';
import axios from 'utils/customAxios';
import { notify } from 'utils/notify';


export const addLabelAction = (payload: object) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.post('/label', payload).then((res) => {
				dispatch({
					type: Types.ADD_LABEL,
					payload: res,
				});
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const getLabelAction = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.get(`/label?owner_id=${payload.owner_id}`).then((res) => {
				dispatch({
					type: Types.GET_LABEL,
					payload: res,
				});
				// notify("success", "Get label success");
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const updateLabelAction = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.put(`/label`, payload).then((res) => {
				dispatch({
					type: Types.UPDATE_LABEL,
					payload: res,
					data: payload,
				});
				notify('success', 'Update label success');
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const deleteLabelAction = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios
				.delete(`/label?owner_id=${payload.owner_id}&label_id=${payload.label_id}`)
				.then((res) => {
					dispatch({
						type: Types.DELETE_LABEL,
						payload: { res, label_id: payload.label_id },
					});
				});
		} catch (err) {
			console.error(err);
		}
	};
};
