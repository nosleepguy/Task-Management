import { ColorInput, TextInput } from '@mantine/core';
import { AddCircle } from 'iconsax-react';
import { useState } from 'react';

interface UpLabelProps {
	handleUpLabel: (payload: any) => void;
}

const UpLabel = ({ handleUpLabel }: UpLabelProps) => {
	//state for new label
	const [newLabel, setNewLabel] = useState<string>('');
	const [colorLabelSelected, setColorLabelSelected] = useState<string>();

	const onHandleUpLabel = () => {
		const payload = {
			name: newLabel,
			hashColor: colorLabelSelected,
		};
		handleUpLabel(payload);
	};

	return (
		<div>
			<div className="add-label w-full mt-2">
				<div className="flex">
					<ColorInput
						className="w-full mr-5"
						format="hex"
						transitionDuration={300}
						radius={5}
						size="md"
						placeholder="Choose color"
						onChange={setColorLabelSelected}
					/>
					<TextInput
						className="w-full"
						radius={5}
						size="md"
						placeholder="Add label name"
						value={newLabel}
						onChange={(e) => setNewLabel(e.currentTarget.value.toString())}
					/>
				</div>
				<button
					className="flex jusify-center  mt-3 px-3 py-2 bg-sky-500 rounded-[5px] text-white"
					onClick={onHandleUpLabel}
				>
					<AddCircle className="mr-2" size="25" color="currentColor" variant="Outline" />
					Add
				</button>
			</div>
		</div>
	);
};

export default UpLabel;
