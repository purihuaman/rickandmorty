import Error from './Error';
import Loading from './Loading';

const LocationGrid = ({ loading, error, children }) => {
	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="lg:flex-1 py-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
			{children}
		</div>
	);
};

export default LocationGrid;
