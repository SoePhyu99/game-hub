import { Grid, Show, GridItem, HStack, Box } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import Headings from "../components/Headings";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
	return (
		<>
			<Grid
				templateAreas={{
					base: `'main'`,
					lg: `'aside main'`,
				}}
				gridTemplateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
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
		</>
	);
};

export default HomePage;
