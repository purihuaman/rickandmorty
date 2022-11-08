import { memo } from 'react';

const FilterCharacter = ({ searchTerm, setSearchTerm, setPage }) => {
	return (
		<div className="md:w-2/4 lg:w-full mx-auto p-4 rounded border border-blue-500">
			<p className="text-blue-500 mb-2 text-2xl semibold">Status</p>

			<form className="flex items-center justify-center flex-wrap gap-3">
				<label className="block py-2 px-2 flex items-center justify-between gap-2 flex-1 rounded bg-slate-300 dark:bg-slate-700 transition-colors duration-1000 shadow">
					All
					<input
						type="radio"
						name="status"
						value=""
						id="all"
						onChange={(ev) => {
							setSearchTerm(ev.target.value.toLowerCase());
							setPage(1);
						}}
						checked={searchTerm === '' && true}
					/>
				</label>

				<label className="block py-2 px-2 flex items-center justify-between gap-2 flex-1 rounded bg-slate-300 dark:bg-slate-700 transition-colors duration-1000 shadow">
					Alive
					<input
						type="radio"
						name="status"
						value="alive"
						id="alive"
						onChange={(ev) => setSearchTerm(ev.target.value.toLowerCase())}
					/>
				</label>

				<label className="block py-2 px-2 flex items-center justify-between gap-2 flex-1 rounded bg-slate-300 dark:bg-slate-700 transition-colors duration-1000 shadow">
					Dead
					<input
						type="radio"
						name="status"
						value="dead"
						id="dead"
						onChange={(ev) => setSearchTerm(ev.target.value.toLowerCase())}
					/>
				</label>

				<label className="block py-2 px-2 flex items-center justify-between gap-2 flex-1 rounded bg-slate-300 dark:bg-slate-700 transition-colors duration-1000 shadow">
					Unknown
					<input
						type="radio"
						name="status"
						value="unknown"
						id="unknown"
						onChange={(ev) => setSearchTerm(ev.target.value.toLowerCase())}
					/>
				</label>
			</form>
		</div>
	);
};

export default memo(FilterCharacter);
