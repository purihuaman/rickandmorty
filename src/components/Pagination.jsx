import { memo } from 'react';

const Pagination = ({ page, totalPages, setPage }) => {
	if (!totalPages) return null;

	const isBackDisabled = page === 1;
	const isNextDisabled = page === totalPages;

	return (
		<nav className="translate-y-1/2 shadow">
			<div className="transtion-scolors durations-1000 py-4 flex justify-center items-center gap-3">
				<button
					onClick={() => setPage(page - 1)}
					disabled={isBackDisabled}
					className="text-4xl inline-flex items-center justify-center h-10 w-10 text-slate-300 bg-blue-500 hover:bg-blue-700 disabled:bg-slate-600 trantion-colors duration-500 rounded-full"
				>
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
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
				</button>

				<span>
					Page {page} of {totalPages}
				</span>

				<button
					onClick={() => setPage(page + 1)}
					disabled={isNextDisabled}
					className="text-4xl inline-flex items-center justify-center h-10 w-10 text-slate-300 bg-blue-500 hover:bg-blue-700 disabled:bg-slate-600 trantion-colors duration-500 rounded-full"
				>
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
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default memo(Pagination);
