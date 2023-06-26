import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const Headings = ({ gameQuery }: Props) => {
	let header = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	} Games`;
	return <Heading>{header}</Heading>;
};

export default Headings;
