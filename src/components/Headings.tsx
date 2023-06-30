import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	gameQuery: GameQuery;
}

const Headings = ({ gameQuery }: Props) => {
	let { data: genres } = useGenres();
	let genre =
		genres?.results.find((gen) => gen.id === gameQuery.genreId)?.name || "";
	let { data: platforms } = usePlatforms();
	let platform =
		platforms?.results.find((p) => p.id === gameQuery.platformId)?.name ||
		"";
	let header = `${platform} ${genre} Games`;
	return <Heading as="h1">{header}</Heading>;
};

export default Headings;
