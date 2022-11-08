const SectionInfo = ({ title, alias, infoDate, children }) => {
	return (
		<section className="flex items-center justify-center py-6 mb-5">
			<div className="p-3 text-center">
				<h1 className="text-4xl">
					{title || 'Unknown'}: <span className="text-blue-500">{alias}</span>
				</h1>

				<h3 className="mt-2">{infoDate}</h3>
				{children}
			</div>
		</section>
	);
};

export default SectionInfo;
