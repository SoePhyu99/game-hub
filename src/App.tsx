import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import Headings from "./components/Headings";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
	pageSize: 10;
}

const App = () => {
	let [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
			gridTemplateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<Navbar
					onSubmit={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={3}>
					<GenreList
						selectedGenre={gameQuery.genreId}
						onSelectedGenre={(genreId) => {
							setGameQuery({ ...gameQuery, genreId });
							console.log(genreId);
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<Box paddingX="10px">
					<Headings gameQuery={gameQuery} />
					<HStack spacing={5} marginY={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platformId}
							onSelectedPlatform={(platformId) => {
								setGameQuery({ ...gameQuery, platformId });
							}}
						/>
						<SortSelector
							gameQuery={gameQuery}
							onSortSelected={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
						></SortSelector>
					</HStack>
					<GameGrid gameQuery={gameQuery} />
				</Box>
			</GridItem>
		</Grid>
	);
};

export default App;
