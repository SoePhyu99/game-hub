import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
	let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	let [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);
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
						selectedGenre={selectedGenre}
						onSelectedGenre={(genre) => {
							setSelectedGenre(genre);
							console.log(genre.id);
						}}
					/>
				</GridItem>
			</Show>
			<GridItem area={"main"} padding="10px">
				<PlatformSelector
					selectedPlatform={selectedPlatform}
					onSelectedPlatform={(platform) => {
						setSelectedPlatform(platform);
					}}
				/>
				<GameGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}
				/>
			</GridItem>
		</Grid>
	);
};

export default App;
