import LocationGrid from '../components/LocationGrid';
import CharacterCard from '../components/CharacterCard';
import Navbar from '../components/Navbar';
import SectionInfo from '../components/SectionInfo';
import Select from '../components/Select';
import { useEpisode } from '../lib/hooks/use-episode';

const Location = () => {
	const { info, setId, results } = useEpisode('location', 1);

	return (
		<main className="py-4 px-2">
			<div className="max-w-screen-2xl mx-auto">
				<SectionInfo
					title="Location"
					alias={info.name ?? 'Unknown'}
					infoDate={`Dimension: ${info.dimension ?? 'Unknown'}`}
				>
					<h3>Type: {info.type ?? 'Unknown'}</h3>
				</SectionInfo>

				<div className="lg:flex gap-3">
					<Navbar title="Pick Location">
						<Select name="Location" total={126} setSearchTerm={setId} />
					</Navbar>

					<LocationGrid>
						{results &&
							results.map((character) => (
								<CharacterCard
									key={character.id}
									name={character.name}
									avatar={character.image}
									status={character.status}
								/>
							))}
					</LocationGrid>
				</div>
			</div>
		</main>
	);
};

export default Location;
