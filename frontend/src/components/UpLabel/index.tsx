import { ColorInput, TextInput } from '@mantine/core';
import { AddCircle } from 'iconsax-react';
import { useState } from 'react';

interface UpLabelProps {
	data?: any;
	handleAction: (payload: any) => void;
	type: string;
}

const UpLabel = ({ data, handleAction, type }: UpLabelProps) => {
	const [newLabel, setNewLabel] = useState<string>(data?.name || '');
	const [colorLabelSelected, setColorLabelSelected] = useState<string>(data?.hashColor || '');

	return (
		<div>
			<div className="add-label w-full mt-2">
				<div className="flex">
					<ColorInput
						value={colorLabelSelected}
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
					onClick={() =>
						handleAction({
							name: newLabel,
							hashColor: colorLabelSelected,
							label_id: data?._id,
							owner_id: data?.owner_id,
						})
					}
				>
					<AddCircle className="mr-2" size="25" color="currentColor" variant="Outline" />
					{type}
				</button>
			</div>
		</div>
	);
};

export default UpLabel;
