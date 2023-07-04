import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import ExpandText from "../components/ExpandText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
	let gameSlug = useParams();
	let { data: game, error, isLoading } = useDetails(gameSlug.slug);
	if (isLoading) return <Spinner />;
	if (error || !game) throw new Error();
	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandText>{game.description_raw}</ExpandText>
			<GameAttributes game={game} />
		</>
	);
};

export default GameDetailPage;
