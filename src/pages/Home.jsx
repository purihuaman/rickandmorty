import Searcher from '../components/Searcher';
import Dashboard from '../components/Dashboard';

// Home: Main - banner - etc
const Home = () => {
	return (
		<main className="py-4 px-2">
			<div className="max-w-screen-2xl mx-auto">
				<section>
					<Searcher />

					<Dashboard />
				</section>
			</div>
		</main>
	);
};

export default Home;
