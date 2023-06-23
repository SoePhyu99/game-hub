import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { FaXbox, FaLinux, FaPlaystation, FaGlobe } from "react-icons/fa";
import { AiFillAndroid, AiFillWindows, AiFillApple } from "react-icons/ai";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";

interface Props {
	platforms: Platform[];
}
const PlatformList = ({ platforms }: Props) => {
	let iconMap: { [key: string]: IconType } = {
		pc: AiFillWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		ios: MdPhoneIphone,
		android: AiFillAndroid,
		mac: AiFillApple,
		web: FaGlobe,
		linux: FaLinux,
	};
	return (
		<HStack marginY="10px">
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} color="grey.500" />
			))}
		</HStack>
	);
};

export default PlatformList;
