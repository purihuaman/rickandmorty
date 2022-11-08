const Header = ({ children }) => {
	return (
		<header className="sticky top-0 bg-slate-200 py-4 px-2 dark:text-slate-300 dark:bg-slate-800 transition-colors duration-1000 shadow">
			<div className="max-w-screen-2xl mx-auto">
				<div className="flex items-center justify-center md:justify-between flex-wrap gap-3">
					<h3 className="text-2xl hover:text-blue-500">
						<a href="/">Rick & Morty</a>
					</h3>

					{children}
				</div>
			</div>
		</header>
	);
};

export default Header;
