import { useContext, useState } from 'react';
import { CharactersContext } from '../pages/Layout';
import CharacterCard from './CharacterCard';
import Characters from './Characters';
import FilterCharacter from './FilterCharacter';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
import Modal from './Modal';
import CharacterPreview from './CharacterPreview';

const Dashboard = () => {
	const [previewCharacter, setPreviewCharacter] = useState();

	const {
		characters,
		loading,
		ex,
		page,
		totalPages,
		setPage,
		searchTerm,
		setSearchTerm,
	} = useContext(CharactersContext);

	return (
		<div className="py-2 lg:flex gap-3">
			<Sidebar>
				<FilterCharacter
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setPage={setPage}
				/>
				<Pagination
					page={page}
					totalPages={totalPages.pages}
					setPage={setPage}
				/>
			</Sidebar>

			<Characters loading={loading} error={ex}>
				{characters &&
					characters.map((character) => (
						<CharacterCard
							key={character.id}
							name={character.name}
							avatar={character.avatar}
							status={character.status}
							gender={character.gender}
							location={character.location}
							origin={character.origin}
							species={character.species}
							onClick={() => setPreviewCharacter(character)}
						/>
					))}
			</Characters>

			{previewCharacter && (
				<Modal closeModal={() => setPreviewCharacter()}>
					<CharacterPreview {...previewCharacter} />
				</Modal>
			)}
		</div>
	);
};

export default Dashboard;
