import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import getPlatform from "../hooks/getPlatform";

interface Props {
	selectedPlatform?: number;
	onSelectedPlatform: (platformId: number | undefined) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
	let { data, error } = usePlatforms();
	let platform = getPlatform(selectedPlatform);
	if (error) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || "Platforms"}
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
