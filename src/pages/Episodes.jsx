import EpisodesGrid from '../components/EpisodesGrid';
import Navbar from '../components/Navbar';
import SectionInfo from '../components/SectionInfo';
import Select from '../components/Select';
import CharacterCard from '../components/CharacterCard';
import { useEpisode } from '../lib/hooks/use-episode';

const Episodes = () => {
	const { info, setId, results } = useEpisode('episode', 1);

	return (
		<main className="py-4 px-2">
			<div className="max-w-screen-2xl mx-auto">
				<SectionInfo
					title="Episode name"
					alias={info.name ?? 'Unknown'}
					infoDate={`Air Date: ${info.air_date ?? 'Unknown'}`}
				/>

				<div className="lg:flex gap-3">
					<Navbar title="Pick Episode">
						<Select name="Episode" total={51} setSearchTerm={setId} />
					</Navbar>

					<EpisodesGrid>
						{results &&
							results.map((character) => (
								<CharacterCard
									key={character.id}
									name={character.name}
									avatar={character.image}
									status={character.status}
								/>
							))}
					</EpisodesGrid>
				</div>
			</div>
		</main>
	);
};

// const getEpisode = () => {
// 	const [id, setId] = useState(1);
// 	const [info, setInfo] = useState([]);
// 	const [results, setResults] = useState([]);
// 	const api = `${API_RICKANDMORTY}/episode/${id}`;

// 	useEffect(() => {
// 		const data = getData(api);

// 		data.then(({ data, newCharacters }) => {
// 			setInfo(data);
// 			setResults(newCharacters);
// 		});
// 	}, [api]);

// 	return {
// 		info,
// 		setId,
// 		results,
// 	};
// };

// const getData = async (api) => {
// 	const response = await fetch(api);
// 	const data = await response.json();

// 	const newCharacters = await Promise.all(
// 		data.characters.map((character) => {
// 			return fetch(character).then((resp) => resp.json());
// 		})
// 	);

// 	return { data, newCharacters };
// };

export default Episodes;
