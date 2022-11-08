import { memo } from 'react';

const Select = ({ name, total, setSearchTerm }) => {
	return (
		<div>
			<select
				name={name}
				id={name}
				onChange={(ev) => setSearchTerm(ev.target.value)}
				defaultValue={1}
				className="w-full p-3 bg-slate-200 dark:bg-slate-800 shadow rounded transtion-colors duration-1000"
			>
				<option value={1}>Choose...</option>
				{total &&
					[...Array(total).keys()].map((item) => (
						<option key={item} value={item + 1}>
							{name} - {item + 1}
						</option>
					))}
			</select>
		</div>
	);
};

export default memo(Select);
