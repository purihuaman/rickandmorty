import { NavLink } from 'react-router-dom';
import { EPISODE, HOME, LOCATION } from '../routes/paths';
import ThemeToggle from './ThemeToggle';

const Navegation = () => {
	return (
		<nav className="w-full md:w-auto ml-auto flex justify-between gap-4 flex-wrap">
			<ul className="flex items-center gap-3">
				<li>
					<NavLink to={HOME} className="hover:underline">
						Character
					</NavLink>
				</li>

				<li>
					<NavLink to={EPISODE} className="hover:underline">
						Episode
					</NavLink>
				</li>

				<li>
					<NavLink to={LOCATION} className="hover:underline">
						Location
					</NavLink>
				</li>
			</ul>

			<ThemeToggle />
		</nav>
	);
};

export default Navegation;
