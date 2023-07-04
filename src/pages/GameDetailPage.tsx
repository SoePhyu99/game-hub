import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
	let gameSlug = useParams();
	let { data: game, error, isLoading } = useDetails(gameSlug.slug);
	if (isLoading) return <Spinner />;
	if (error || !game) throw new Error();
	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	);
};

export default GameDetailPage;
