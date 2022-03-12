import { Modal } from '@mantine/core';
import UpdateTaskContainer from 'container/UpdateTask';
import { Alarm, Coffee, Edit, Flash, TickCircle, Trash } from 'iconsax-react';
import { useState } from 'react';
import { formatTimeString } from 'utils/utils';

const StatusList = [
	{
		content: 'Hand Free',
		color: '#2563eb',
		icon: <Coffee className="mr-2" size="20" color="#2563eb" variant="Bold" />,
		id: 1,
	},
	{
		content: 'Working',
		color: '#f59e0b',
		icon: <Flash className="mr-2" size="20" color="#f59e0b" variant="Bold" />,
		id: 2,
	},
	{
		content: 'Hot Water',
		color: '#dc2626',
		icon: <Alarm className="mr-2" size="20" color="#dc2626" variant="Bold" />,
		id: 3,
	},
];

const TaskItem = ({ data, handleCompleteTask, handleDeleteTask }: any) => {
	const timeFomarted = formatTimeString(data.deadline);
	const [openedEdit, setOpenedEdit] = useState(false);
	const [openedDelete, setOpenedDelete] = useState(false);

	return (
		<>
			<Modal opened={openedEdit} onClose={() => setOpenedEdit(false)} size="lg">
				<UpdateTaskContainer data={data} />
			</Modal>
			<Modal opened={openedDelete} onClose={() => setOpenedDelete(false)} size="sm">
				<p className="text-2xl">
					Are you sure delete <span className="font-bold italic">{data.name}</span> ?
				</p>
				<button
					onClick={() => {
						handleDeleteTask(data._id), setOpenedDelete(false);
					}}
					className="bg-red-700 rounded-md text-white mx-auto mt-4 py-2 px-3"
				>
					Yes! Delete
				</button>
			</Modal>
			<div className="overflow-hidden border-slate-400 w-72 max-w-md max-h-[290px] rounded-md bg-white mr-3 mb-3 grow drop-shadow-[0_10px_10px_#9c9c9c18]">
				<div
					className="w-full h-1 bg-sky-500"
					style={{
						backgroundColor: `${data.labelData.hashColor}`,
					}}
				></div>
				<div className="wrapper p-5 h-full flex flex-col justify-between">
					<div>
						<div className="flex h-fit">
							<div className="label">
								<button
									className="bg-blue-100 text-blue-600 group flex rounded items-center w-fit p-1.5 mr-3 px-2 text-sm"
									style={{
										color: `${data.labelData.hashColor}`,
									}}
								>
									{data.labelData.name}
								</button>
							</div>
							<div className="tag">
								<div
									className="bg-blue-100 text-blue-600 group flex rounded items-center w-fit p-1.5 px-2 text-sm"
									style={{
										color: `${StatusList[data.status - 1].color}`,
									}}
								>
									{StatusList[data.status - 1].icon}
									{StatusList[data.status - 1].content}
								</div>
							</div>
						</div>
						<div className="content leading-8 text-regal-blue" onClick={() => setOpenedEdit(true)}>
							<div className="py-3 pb-2 text-truncate overflow-hidden">
								<div
									dangerouslySetInnerHTML={{
										__html: data.content,
									}}
								></div>
							</div>
						</div>
					</div>
					<div>
						<div className="deadline">
							<hr />
							<p className="whitespace-nowrap pt-2">
								Deadline: {`${timeFomarted.hours}:${timeFomarted.minutes} ${timeFomarted.ampm}`} -{' '}
								{`${timeFomarted.day} - ${timeFomarted.date}/${timeFomarted.month}/${timeFomarted.year}`}
							</p>
						</div>
						<div className="action flex self-end">
							<button
								onClick={() => setOpenedEdit(true)}
								className="flex jusify-center items-center mt-3 pr-3 rounded text-gray-500 hover:text-blue-600"
							>
								<Edit className="mr-2" size="20" color="currentColor" variant="Outline" />
							</button>
							<button
								onClick={() => handleCompleteTask(data._id)}
								className="flex jusify-center items-center mt-3 pr-3 rounded text-gray-500 hover:text-blue-600"
							>
								<TickCircle className="mr-2" size="20" color="currentColor" variant="Outline" />
							</button>
							<button
								onClick={() => setOpenedDelete(true)}
								className="flex jusify-center items-center mt-3 pr-3 rounded text-gray-500 hover:text-blue-600"
							>
								<Trash className="mr-2" size="20" color="currentColor" variant="Outline" />
							</button>
							<button className="flex jusify-center items-center mt-3 pr-3 rounded text-blue-600">
								{StatusList[data.status - 1].icon}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskItem;
