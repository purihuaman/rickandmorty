import Error from './Error';
import Loading from './Loading';

const EpisodesGrid = ({ loading, error, children }) => {
	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="lg:flex-1 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-5">
			{children}
		</div>
	);
};

export default EpisodesGrid;
