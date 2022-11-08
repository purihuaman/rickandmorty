import { createContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navegation from '../components/Navegation';
import { useRickAndMorty } from '../lib/hooks/use-rick-morty';
import { EPISODE, HOME, LOCATION } from '../routes/paths';
import Episodes from './Episodes';
import Error404 from './Error404';
import Home from './Home';
import Location from './Location';

// Router
export const CharactersContext = createContext('CharactersContext');

const Layout = () => {
	const {
		characters,
		totalPages,
		searchTerm,
		page,
		ex,
		loading,
		setSearchTerm,
		setPage,
	} = useRickAndMorty();

	return (
		<>
			<HashRouter>
				<Header>
					<Navegation />
				</Header>

				<CharactersContext.Provider
					value={{
						characters,
						totalPages,
						searchTerm,
						page,
						ex,
						loading,
						setSearchTerm,
						setPage,
					}}
				>
					<Routes>
						<Route exact path={HOME} element={<Home />} />
						<Route exact path={EPISODE} element={<Episodes />} />
						<Route exact path={LOCATION} element={<Location />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</CharactersContext.Provider>
				<Footer />
			</HashRouter>
		</>
	);
};

export default Layout;
