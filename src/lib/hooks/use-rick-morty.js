import { useEffect, useReducer, useRef } from 'react';
import {
	characterInfoReducer,
	CHARACTERS_INFO_ACTIONS,
	CHARACTERS_INFO_INITIAL_STATE,
} from '../reducer/character-info-reducer';
import searchCharactersApi from '../api/search-characters-api';

const searchCharacters = async (
	search,
	page,
	searchStart,
	searchSuccess,
	searchError
) => {
	searchStart();

	const { success, data, statusCode, message } = await searchCharactersApi(
		search,
		page
	);

	if (success) searchSuccess(data.characters, data.info);
	else searchError(`Error ${statusCode}: ${message}`);
};

const useRickAndMorty = () => {
	const [charactersInfo, setCharactersInfo] = useReducer(
		characterInfoReducer,
		CHARACTERS_INFO_INITIAL_STATE
	);

	const isInitialzed = useRef(false);

	const searchStart = () =>
		setCharactersInfo({ type: CHARACTERS_INFO_ACTIONS.SEARCH_START });

	const searchSuccess = (characters, totalPages) =>
		setCharactersInfo({
			type: CHARACTERS_INFO_ACTIONS.SEARCH_SUCCESS,
			characters,
			totalPages,
		});

	const searchError = (ex) =>
		setCharactersInfo({ type: CHARACTERS_INFO_ACTIONS.SEARCH_ERROR, ex });

	const setSearchTerm = (newSearchTerm) =>
		setCharactersInfo({
			type: CHARACTERS_INFO_ACTIONS.SET_SEARCH_TERM,
			searchTerm: newSearchTerm,
		});

	const setPage = (newPage) =>
		setCharactersInfo({
			type: CHARACTERS_INFO_ACTIONS.SET_PAGE,
			page: newPage,
		});

	useEffect(() => {
		const searchTimeout = () =>
			searchCharacters(
				charactersInfo.searchTerm,
				charactersInfo.page,
				searchStart,
				searchSuccess,
				searchError
			);

		if (!isInitialzed.current) {
			searchTimeout();
		} else {
			const timeoutId = setTimeout(() => searchTimeout, 200);

			return () => clearInterval(timeoutId);
		}
	}, [charactersInfo.searchTerm, charactersInfo.page]);

	return { ...charactersInfo, setSearchTerm, setPage };
};

export { useRickAndMorty };
