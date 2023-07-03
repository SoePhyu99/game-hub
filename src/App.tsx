import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import Headings from "./components/Headings";

const App = () => {
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
				<Navbar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={3}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<Box paddingX="10px">
					<Headings />
					<HStack spacing={5} marginY={5}>
						<PlatformSelector />
						<SortSelector></SortSelector>
					</HStack>
					<GameGrid />
				</Box>
			</GridItem>
		</Grid>
	);
};

export default App;
