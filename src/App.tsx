import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `'nav nav' 'aside main'`,
			}}
		>
			<GridItem area={"nav"}>
				<Navbar></Navbar>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} bg={"gray"}>
					Aside
				</GridItem>
			</Show>
			<GridItem area={"main"} bg={"lightgreen"}>
				Main
			</GridItem>
		</Grid>
	);
};

export default App;
