import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useDetails from "../hooks/useDetails";

import ExpandText from "../components/ExpandText";
import GameAttributes from "../components/GameAttributes";
import Trailers from "../components/Trailers";
import ScreenShots from "../components/ScreenShots";

const GameDetailPage = () => {
	let { slug } = useParams();
	let { data: game, error, isLoading } = useDetails(slug);

	if (isLoading) return <Spinner />;
	if (error || !game) throw new Error();
	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandText>{game.description_raw}</ExpandText>
			<GameAttributes game={game} />
			<Trailers id={game.id} />
			<ScreenShots gameId={game.id} />
		</>
	);
};

export default GameDetailPage;
