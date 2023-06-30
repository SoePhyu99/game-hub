import useGenres from "./useGenres";

const getGenre = (id?: number) => {
	const { data } = useGenres();
	return data?.results.find((gen) => gen.id === id);
};

export default getGenre;
