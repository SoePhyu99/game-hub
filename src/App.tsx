import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
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
				lg: "240px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={3}>
					<GenreList
						selectedGenre={gameQuery.genre}
						onSelectedGenre={(genre) => {
							setGameQuery({ ...gameQuery, genre });
							console.log(genre.id);
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"} padding="10px">
				<HStack spacing={5} marginBottom={5}>
					<PlatformSelector
						selectedPlatform={gameQuery.platform}
						onSelectedPlatform={(platform) => {
							setGameQuery({ ...gameQuery, platform });
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
			</GridItem>
		</Grid>
	);
};

export default App;
