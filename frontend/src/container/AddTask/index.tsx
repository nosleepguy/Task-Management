import { useEffect } from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addLabelAction, getLabelAction } from 'redux/action/label';
import { addTaskAction } from 'redux/action/task';

import { notify } from 'utils/notify';
import { combineDateAndTimeToISOString } from 'utils/utils';

import TaskForm from 'components/TaskForm';
import Loading from 'components/Loading';

const AddTaskContainer = () => {
	const dispatch = useDispatch();
	const dataAuthRedux = useSelector((state: RootStateOrAny) => state.AuthReducer);
	const dataLabelRedux = useSelector((state: RootStateOrAny) => state.LabelReducer);

	//create task
	const handleUpTask = (payloadData: any) => {
		const { dataContent, deadlineDate, deadlineTime, status, labelSelected } = payloadData;
		if (
			dataContent === '<p><br></p>' ||
			deadlineDate == undefined ||
			deadlineTime == undefined ||
			status == 0 ||
			labelSelected == undefined
		) {
			notify('error', 'Please fill all field');
		} else {
			const payload = {
				owner_id: dataAuthRedux._id,
				dataContent,
				deadline: combineDateAndTimeToISOString(
					deadlineDate.toISOString(),
					deadlineTime.toISOString()
				),
				status,
				label_id: labelSelected,
			};
			dispatch(addTaskAction(payload));

			return true;
		}
	};

	//create label
	const handleUpLabel = (payloadData: any) => {
		const { name, hashColor } = payloadData;
		if (name.length > 0) {
			name.trim();
			dispatch(
				addLabelAction({
					owner_id: dataAuthRedux._id,
					name,
					hashColor,
				})
			);
			// setNewLabel("");
			//return for clear input
			return true;
		}
	};

	// lấy label về
	useEffect(() => {
		dispatch(getLabelAction({ owner_id: dataAuthRedux._id }));
	}, [dataAuthRedux]);

	//biến đổi để match định dạng form khi lấy được list label về
	useEffect(() => {
		if (dataLabelRedux.length > 0) {
			dataLabelRedux.forEach((item: any) => {
				item['label'] = item.name;
				item['value'] = item._id;
			});
		}
	}, [dataLabelRedux]);

	return (
		<>
			{dataLabelRedux.length > 0 ? (
				<TaskForm
					handleUpTask={handleUpTask}
					handleUpLabel={handleUpLabel}
					labelData={dataLabelRedux}
				/>
			) : (
				<Loading />
			)}
		</>
	);
};

export default AddTaskContainer;
