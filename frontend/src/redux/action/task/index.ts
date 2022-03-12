import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as Types from 'redux/constants';
import axios from 'utils/customAxios';
import { notify } from 'utils/notify';

export const addTaskAction = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.post('/tasks', payload).then((res) => {
				dispatch({
					type: Types.ADD_TASK,
					payload: res,
				});
				notify('success', 'Task added successfully');
			});
		} catch (error) {
			notify('error', 'Add Task Failed!');
		}
	};
};

export const getAllTaskAction = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.get(`/tasks?owner_id=${payload.owner_id}`).then((res) => {
				if (res.data.success) {
					dispatch({
						type: Types.GET_ALL_TASK,
						payload: res,
					});
				} else {
					notify('error', 'Get Task Failed!');
				}
			});
		} catch (error) {
			notify('error', 'Get Tasks Failed!');
		}
	};
};

export const completeTaskRequest = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.put(`/tasks`, payload).then((res) => {
				dispatch({
					type: Types.COMPLETE_TASK,
					payload,
				});
				notify('success', 'Task completed successfully');
			});
		} catch (error) {
			notify('error', 'Complete Task Failed!');
		}
	};
};

export const deleteTaskRequest = (payload: any) => {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
		try {
			axios.delete(`/tasks/?task_id=${payload.task_id}`).then((res) => {
				dispatch({
					type: Types.DELETE_TASK,
					payload,
				});
				notify('success', 'Task deleted successfully');
			});
		} catch (error) {
			notify('error', 'Delete Task Failed!');
		}
	};
};
