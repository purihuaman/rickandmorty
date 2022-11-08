const Loading = () => {
	return (
		<div className="w-full flex items-center justify-center p-3 bg-slate-200 dark:bg-slate-800 rounded transition-colors duration-1000 shadow">
			<p className="text-2xl text-blue-500 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="32"
					height="32"
					className="animate-spin h-5 w-5 mr-3 fill-blue-500"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
				</svg>
				Loading...
			</p>
		</div>
	);
};

export default Loading;
