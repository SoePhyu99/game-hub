import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
	selectedPlatform?: number;
	onSelectedPlatform: (platformId: number | undefined) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
	let { data, error } = usePlatforms();
	if (error) return null;
	let platformName = data?.results.find(
		(p) => p.id == selectedPlatform
	)?.name;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platformName || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						onClick={() => onSelectedPlatform(platform.id)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
