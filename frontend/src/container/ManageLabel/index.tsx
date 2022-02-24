import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Edit2 } from 'iconsax-react';
import { addLabelAction } from 'redux/action/label';
import UpLabel from 'components/UpLabel';

const ManageLabelContainer = () => {
	const dispatch = useDispatch();
	const dataAuthRedux = useSelector((state: RootStateOrAny) => state.AuthReducer);
	const dataLabelRedux = useSelector((state: RootStateOrAny) => state.LabelReducer);
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
	useEffect(() => {
		console.log(dataLabelRedux);
	}, [dataLabelRedux]);
	return (
		<div className="flex flex-col md:flex-row w-full w-max-[2000px] justify-center p-10">
			<div className="rich-text w-full bg-white border border-[#ced4da] rounded-lg px-3 py-2">
				<div className="block text-gray-700 text-lg font-semibold py-2 px-2">Your Labels</div>
				<div className="flex items-center bg-gray-200 rounded-md">
					<div className="pl-2">
						<svg
							className="fill-current text-gray-500 w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								className="heroicon-ui"
								d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
							/>
						</svg>
					</div>
					<input
						className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
						id="search"
						type="text"
						placeholder="Search label name"
					/>
				</div>
				<div className="py-3 text-sm">
					<div className="label-item flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2 transition">
						<span className="h-5 w-5 m-2 rounded-md" style={{ background: 'red' }}></span>
						<div className="flex-grow font-medium px-2">Tighten Co.</div>
						<Edit2 className='edit ml-2' size="20" color="currentColor" />
					</div>
					<div className="label-item flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2 transition">
						<span className="h-5 w-5 m-2 rounded-md" style={{ background: 'red' }}></span>
						<div className="flex-grow font-medium px-2">Tighten Co.</div>
						<Edit2 className='edit ml-2' size="20" color="currentColor" />
					</div>
					<div className="label-item flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2 transition">
						<span className="h-5 w-5 m-2 rounded-md" style={{ background: 'red' }}></span>
						<div className="flex-grow font-medium px-2">Tighten Co.</div>
						<Edit2 className='edit ml-2' size="20" color="currentColor" />
					</div>
				</div>
			</div>
			<div className="date-time w-full p-4 border border-[#ced4da] rounded-lg">
				<UpLabel handleUpLabel={handleUpLabel} />
			</div>
		</div>
	);
};

export default ManageLabelContainer;