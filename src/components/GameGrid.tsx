import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Boxes from "./Boxes";
import { GameQuery } from "../App";
import React from "react";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	let {
		data,
		error,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	} = useGames(gameQuery);
	let load = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				paddingY={2}
				spacing={6}
			>
				{isLoading &&
					load.map((l) => (
						<Boxes key={l}>
							<GameCardSkeleton key={l} />
						</Boxes>
					))}
				{!isLoading &&
					data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game) => (
								<Boxes key={game.id}>
									<GameCard game={game} />
								</Boxes>
							))}
						</React.Fragment>
					))}
			</SimpleGrid>
			{hasNextPage && (
				<Button onClick={() => fetchNextPage()} marginY={5}>
					{isFetchingNextPage ? "Loading" : "Load More"}
				</Button>
			)}
		</>
	);
};

export default GameGrid;
