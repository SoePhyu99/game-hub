import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Boxes from "./Boxes";

const GameGrid = () => {
	let { data, error, isLoading } = useGames();
	let load = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding="10px"
				spacing={3}
			>
				{!error &&
					isLoading &&
					load.map((l) => (
						<Boxes>
							<GameCardSkeleton key={l} />
						</Boxes>
					))}
				{data.map((game) => (
					<Boxes>
						<GameCard key={game.id} game={game} />
					</Boxes>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
