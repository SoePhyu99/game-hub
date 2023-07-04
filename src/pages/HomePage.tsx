import { Grid, Show, GridItem, Box, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import Headings from "../components/Headings";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { useEffect } from "react";

const HomePage = () => {
	useEffect(() => {
		document.title = "Game Hub";
	}, []);
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
					<Box paddingX={"10px"}>
						<Headings />
						<Flex flexWrap="wrap" marginY={2}>
							<Box paddingRight="10px" marginY={1}>
								<PlatformSelector />
							</Box>
							<Box marginY={1}>
								<SortSelector />
							</Box>
						</Flex>
						<GameGrid />
					</Box>
				</GridItem>
			</Grid>
		</>
	);
};

export default HomePage;
