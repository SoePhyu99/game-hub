import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
			<SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} padding="10px">
				<GridItem>
					<Heading>{game.name}</Heading>
					<ExpandText>{game.description_raw}</ExpandText>
					<GameAttributes game={game} />
				</GridItem>
				<GridItem>
					<Trailers id={game.id} />
					<ScreenShots gameId={game.id} />
				</GridItem>
			</SimpleGrid>
		</>
	);
};

export default GameDetailPage;
