import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Boxes from "./Boxes";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	let { data, error, isLoading } = useGames(gameQuery);
	let load = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				paddingY={2}
				spacing={3}
			>
				{!error &&
					isLoading &&
					load.map((l) => (
						<Boxes key={l}>
							<GameCardSkeleton key={l} />
						</Boxes>
					))}
				{!isLoading &&
					data.map((game) => (
						<Boxes key={game.id}>
							<GameCard game={game} />
						</Boxes>
					))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
