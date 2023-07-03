import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import getPlatform from "../hooks/getPlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platformId);
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
						onClick={() => setPlatformId(platform.id)}
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
