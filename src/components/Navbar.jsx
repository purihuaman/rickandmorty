const Navbar = ({ title, children }) => {
	return (
		<aside className="lg:w-64">
			<div className="mb-4">
				<h2 className="text-2xl text-center">{title}</h2>
			</div>

			{children}
		</aside>
	);
};

export default Navbar;
