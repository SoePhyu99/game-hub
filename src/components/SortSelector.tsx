import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Sort by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date Added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release Date</MenuItem>
				<MenuItem>Average Ratings</MenuItem>
				<MenuItem>Popularity</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
