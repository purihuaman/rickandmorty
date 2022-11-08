import Error from './Error';
import Loading from './Loading';

const Characters = ({ loading, error, children }) => {
	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	return (
		<div className="flex-1 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-min py-5">
			{children}
		</div>
	);
};

export default Characters;
