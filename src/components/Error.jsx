const Error = ({ error }) => {
	return (
		<div className="w-full flex items-center justify-center mt-5 py-5 px-3 bg-slate-200 dark:bg-slate-800 rounded transition-colors duration-1000 shadow">
			<h3 className="text-1xl text-center text-red-500">{error}</h3>
		</div>
	);
};

export default Error;
