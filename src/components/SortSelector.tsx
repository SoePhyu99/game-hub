import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
	onSortSelected: (sortOrder: string) => void;
}

const SortSelector = ({ gameQuery, onSortSelected }: Props) => {
	let sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-rating", label: "Average Ratings" },
		{ value: "-metacritic", label: "Popularity" },
	];

	let currentSortOrder = sortOrders.find(
		(order) => order.value === gameQuery.sortOrder
	);
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Sort by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => onSortSelected(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
