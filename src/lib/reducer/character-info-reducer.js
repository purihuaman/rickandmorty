const characterInfoReducer = (state, action) => {
	switch (action.type) {
		case CHARACTERS_INFO_ACTIONS.SEARCH_START:
			return {
				...state,
				ex: undefined,
				loading: true,
			};
		case CHARACTERS_INFO_ACTIONS.SEARCH_SUCCESS:
			return {
				...state,
				characters: action.characters,
				totalPages: action.totalPages,
				ex: undefined,
				loading: false,
			};

		case CHARACTERS_INFO_ACTIONS.SEARCH_ERROR:
			return {
				...state,
				characters: [],
				ex: action.ex,
				loading: false,
			};
		case CHARACTERS_INFO_ACTIONS.SET_PAGE:
			return { ...state, page: action.page };

		case CHARACTERS_INFO_ACTIONS.SET_SEARCH_TERM:
			return { ...state, searchTerm: action.searchTerm };

		default:
			throw new Error('Invalid action');
	}
};

const CHARACTERS_INFO_INITIAL_STATE = {
	characters: [],
	searchTerm: '',
	page: 1,
	totalPages: 1,
	ex: undefined,
	loading: false,
};

const CHARACTERS_INFO_ACTIONS = {
	SEARCH_START: 0,
	SEARCH_SUCCESS: 1,
	SEARCH_ERROR: 2,
	SET_PAGE: 3,
	SET_SEARCH_TERM: 4,
};

export {
	CHARACTERS_INFO_INITIAL_STATE,
	CHARACTERS_INFO_ACTIONS,
	characterInfoReducer,
};
