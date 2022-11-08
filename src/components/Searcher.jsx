import { useContext, useEffect, useState } from 'react';
import { CHARACTER_STATUS_FILTER } from '../constants/api';
import { CharactersContext } from '../pages/Layout';

const Searcher = () => {
	const { searchTerm, setSearchTerm } = useContext(CharactersContext);

	const [value, setValue] = useState('');

	const handleChange = (ev) => {
		const newValue = ev.target.value;

		setValue(newValue);
		setSearchTerm(newValue);
	};

	useEffect(() => {
		const result = CHARACTER_STATUS_FILTER.hasOwnProperty(searchTerm);
		if (result) setValue('');
	}, [searchTerm]);

	return (
		<section>
			<h1 className="text-center text-4xl mb-3">Characters</h1>

			<div className="text-center">
				<span className="relative">
					<input
						type="text"
						onChange={handleChange}
						value={value}
						placeholder="Search for charactes"
						className="relative w-2/4 p-2 pl-10 focus:outline-blue-500 bg-slate-300 dark:bg-slate-700 rounded focus-visible:border-blue-500 transition-colors duration-1000"
					/>

					<button className="absolute left-0 top-0 mb-4 pl-3 text-slate-400 transition-colors duration-500 rounded">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</button>
				</span>
			</div>
		</section>
	);
};

export default Searcher;
