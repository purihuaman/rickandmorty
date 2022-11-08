import { useEffect, useState } from 'react';
import { API_RICKANDMORTY } from '../../constants/api';
import { characterApiMapper } from '../mappers/character-api-mapper';

let newCharacters = [];
const getData = async (api) => {
	const response = await fetch(api);
	const data = await response.json();

	if (data.characters) {
		newCharacters = await Promise.all(
			data.characters.map(async (character) => {
				const response = await fetch(character);
				return characterApiMapper(await response.json());
			})
		);
	} else {
		newCharacters = await Promise.all(
			data.residents.map(async (character) => {
				const response = await fetch(character);
				return characterApiMapper(await response.json());
			})
		);
	}

	return { data, newCharacters };
};

export const useEpisode = (category, key) => {
	const [id, setId] = useState(key);
	const [info, setInfo] = useState([]);
	const [results, setResults] = useState([]);
	const api = `${API_RICKANDMORTY}/${category}/${id}`;

	useEffect(() => {
		const data = getData(api);

		data.then(({ data, newCharacters }) => {
			setInfo(data);
			setResults(newCharacters);
		});
	}, [api]);

	return {
		info,
		setId,
		results,
	};
};
