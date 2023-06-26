import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
	let [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
			<GridItem area={"main"}>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	);
};

export default App;
