import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
	let { games, error, isLoading } = useGames();
	let load = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={[1, 2, 3, 4]} padding={10} spacing={"20px"}>
				{!error &&
					isLoading &&
					load.map((l) => <GameCardSkeleton key={l} />)}
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
