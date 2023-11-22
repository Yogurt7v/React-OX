export const Field = () => {
	let arr = ['', '', '', '', '', '', '', '', ''];
	return (
		<div className="App-field">
			{arr.map((item, index) => (
				<div key={index} index={index}>
					{index}
				</div>
			))}
		</div>
	);
};
