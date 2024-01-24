import { useSelector } from 'react-redux';


export const Information = () => {

	const message = useSelector((state) => state.message);
	const color = useSelector((state) => state.textColor);

	return (
		<div className="mt-8 flex m-auto justify-center items-center text-center h-12 w-96 bg-white border border-gray-500  shadow-gray-500 shadow-md" style={{ color: color }}>
			{message}
		</div>
	);
};

