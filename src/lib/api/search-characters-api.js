import { API_RICKANDMORTY, CHARACTER_STATUS_FILTER } from '../../constants/api';
import { characterApiMapper } from '../mappers/character-api-mapper';

const searchCharactersApi = async (query, page, category) => {
	const newEndpoint = setEndpoint(query, page, category);

	try {
		const response = await fetch(newEndpoint);

		if (response.ok) {
			const data = await response.json();

			if (!data.results) {
				return {
					success: true,
					data: {
						characters: data,
					},
				};
			} else {
				return {
					success: true,
					data: {
						characters: data.results.map((character) =>
							characterApiMapper(character)
						),
						info: data.info,
					},
				};
			}
		}

		return {
			success: false,
			statusCode: response.status,
			message: `There is no character "${query}"`,
		};
	} catch (ex) {
		return {
			success: false,
			code: 500,
		};
	}
};

const setEndpoint = (query, page) => {
	let endpoint = null;

	switch (query) {
		case CHARACTER_STATUS_FILTER.alive:
			endpoint = `${API_RICKANDMORTY}/character?&page=${page}&status=${query}`;
			break;
		case CHARACTER_STATUS_FILTER.dead:
			endpoint = `${API_RICKANDMORTY}/character?&page=${page}&status=${query}`;
			break;
		case CHARACTER_STATUS_FILTER.unknown:
			endpoint = `${API_RICKANDMORTY}/character?&page=${page}&status=${query}`;
			break;
		default:
			endpoint = `${API_RICKANDMORTY}/character?&page=${page}&name=${query}`;
			break;
	}

	return endpoint;
};

export default searchCharactersApi;
