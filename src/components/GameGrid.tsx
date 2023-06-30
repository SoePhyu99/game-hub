import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Boxes from "./Boxes";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	let { data, error, isLoading, hasNextPage, fetchNextPage } =
		useGames(gameQuery);
	let load = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const gameCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;

	return (
		<InfiniteScroll
			hasMore={!!hasNextPage}
			next={() => {
				try {
					fetchNextPage();
				} catch (e) {
					console.log(e);
				}
			}}
			dataLength={gameCount}
			loader={<Spinner />}
			endMessage={<h1>ending</h1>}
		>
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
		</InfiniteScroll>
	);
};

export default GameGrid;
