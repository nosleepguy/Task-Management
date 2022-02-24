import { useState, forwardRef } from 'react';
import { AddCircle, Clock, Flash, Coffee, Alarm } from 'iconsax-react';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Select, Group, Text, ColorInput, TextInput } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import dayjs from 'dayjs';
import UpLabel from 'components/UpLabel';

const StatusList = [
	{
		label: 'Hot Water',
		value: '3',
		icon: <Alarm className="mr-2" size="20" color="#dc2626" variant="Bold" />,
	},
	{
		label: 'Working',
		value: '2',
		icon: <Flash className="mr-2" size="20" color="#f59e0b" variant="Bold" />,
	},
	{
		label: 'Hand Free',
		value: '1',
		icon: <Coffee className="mr-2" size="20" color="#2563eb" variant="Bold" />,
	},
];

interface TaskFormProps {
	handleUpTask: (data: any) => void;
	handleUpLabel: (data: any) => void;
	labelData: any;
}
interface LabelType {
	name: string;
	hashColor: string;
}

const TaskForm = ({ handleUpTask, handleUpLabel, labelData }: TaskFormProps) => {
	//state for task
	const [dataContent, setDataContent] = useState<string>('Write something...');
	const [deadlineDate, setDeadlineDate] = useState<Date>();
	const [deadlineTime, setDeadlineTime] = useState<Date>();
	const [status, setStatus] = useState<number>(0);
	const [labelSelected, setLabelSelected] = useState<string>();

	const onHandleUpTask = () => {
		const payload = {
			dataContent,
			deadlineDate,
			deadlineTime,
			status,
			labelSelected,
		};
		handleUpTask(payload);
	};
	const onHandleUpLabel = ({ name, hashColor }: LabelType) => {
		const payload = {
			name,
			hashColor,
		};
		handleUpLabel(payload);
	};

	return (
		<>
			<div className="w-full w-max-[2000px] flex flex-col md:flex-row mx-auto rounded-md p-10 text-regal-blue">
				<RichTextEditor
					className="rich-text max-w-[1300px] w-full md:w-[60%]"
					classNames={{
						root: 'rounded-[10px] overflow-hidden',
					}}
					controls={[
						['bold', 'italic', 'underline', 'strike', 'clean'],
						['h1', 'h2', 'h3', 'h4'],
						['unorderedList', 'orderedList'],
						['link', 'blockquote', 'codeBlock'],
						['alignLeft', 'alignCenter', 'alignRight'],
						['sup', 'sub'],
					]}
					value={dataContent}
					placeholder="Write something..."
					onChange={setDataContent}
				/>
				<div className="date-time w-full md:w-[40%] rounded-[10px] border border-[#ced4da] p-3 bg-white">
					<div className="flex flex-wrap">
						{/* deadline */}
						<div className="mr-0 w-full mb-3 grow">
							<p className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-white rounded">
								Deadline
							</p>
							<div className="flex grow">
								<DatePicker
									radius={5}
									size="md"
									className="mr-5 w-full"
									placeholder="Choose Date"
									onChange={(e: Date) => setDeadlineDate(e)}
									minDate={dayjs(new Date())
										.startOf('month')
										.add(new Date().getDate() - 1, 'days')
										.toDate()}
								/>
								<TimeInput
									className="w-full"
									radius={5}
									size="md"
									clearable={false}
									onChange={(e: Date) => setDeadlineTime(e)}
									icon={<Clock size="20" color="currentColor" variant="Bold" />}
								/>
							</div>
						</div>

						<div className="flex w-full">
							{/* status */}
							<div className="status grow mr-5">
								<span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
									Status
								</span>
								<Select
									className="w-full"
									radius={5}
									size="md"
									placeholder="Choose Status"
									itemComponent={SelectItem}
									data={StatusList}
									searchable
									clearable
									maxDropdownHeight={400}
									nothingFound="Nobody here"
									onChange={(e: string) => setStatus(+e)}
								/>
							</div>

							{/* label */}
							<div className="label grow">
								<span className="w-fit text-xs inline-block py-1 px-1.5 mb-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">
									Label
								</span>
								<Select
									className="w-full"
									radius={5}
									size="md"
									placeholder="Choose Label"
									maxDropdownHeight={400}
									clearable
									data={labelData}
									onChange={(e: string) => setLabelSelected(e)}
								/>
							</div>
						</div>
					</div>
					<button
						className="flex jusify-center mt-3 px-3 py-2 bg-sky-500 rounded-[5px] text-white"
						onClick={onHandleUpTask}
					>
						<AddCircle className="mr-2" size="25" color="currentColor" variant="Outline" />
						Add
					</button>
					<div>
						<p
							className="text-xs color p-2 bg-white w-fit mx-auto"
							style={{ transform: 'translateY(15px)' }}
						>
							Create new Label
						</p>
						<hr className="py-2" />
					</div>
					<div>
						<UpLabel handleUpLabel={onHandleUpLabel} />
					</div>
				</div>
			</div>
		</>
	);
};
const SelectItem = forwardRef(({ label, value, icon, ...others }: any, ref: any) => (
	<div ref={ref} {...others}>
		<Group noWrap>
			<p>{icon}</p>
			<div>
				<Text className="text-sm">{label}</Text>
			</div>
		</Group>
	</div>
));
export default TaskForm;
