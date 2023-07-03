import { Heading } from "@chakra-ui/react";
import getPlatform from "../hooks/getPlatform";
import getGenre from "../hooks/getGenre";
import useGameQueryStore from "../store";

const Headings = () => {
	let genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	let platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	let platform = getPlatform(platformId)?.name;
	let genre = getGenre(genreId)?.name;
	let header = `${platform || ""} ${genre || ""} Games`;
	return <Heading as="h1">{header}</Heading>;
};

export default Headings;
