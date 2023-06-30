import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import getPlatform from "../hooks/getPlatform";
import getGenre from "../hooks/getGenre";

interface Props {
	gameQuery: GameQuery;
}

const Headings = ({ gameQuery }: Props) => {
	let platform = getPlatform(gameQuery.platformId)?.name;
	let genre = getGenre(gameQuery.genreId)?.name;
	let header = `${platform || ""} ${genre || ""} Games`;
	return <Heading as="h1">{header}</Heading>;
};

export default Headings;
