export const characterApiMapper = (characterApiObject) => ({
	id: characterApiObject?.id,
	name: characterApiObject?.name || '',
	avatar: characterApiObject?.image,
	status: characterApiObject?.status || '',
	gender: characterApiObject?.gender,
	location: characterApiObject?.location?.name,
	origin: characterApiObject?.origin?.name,
	species: characterApiObject?.species,
});
