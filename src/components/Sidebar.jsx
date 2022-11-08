import { memo } from 'react';

const Sidebar = ({ children }) => {
	return (
		<aside className="py-5 flex flex-col mb-3">
			<div className="text-center pb-3">
				<h3 className="text-blue-500 text-3xl">Filters</h3>
			</div>

			{children}
		</aside>
	);
};

export default memo(Sidebar);
