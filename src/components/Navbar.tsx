import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
const Navbar = () => {
	return (
		<HStack justifyContent={"space-between"} padding={"10px"}>
			<Image src={logo} boxSize="60px" />
			<SwitchColorMode />
		</HStack>
	);
};

export default Navbar;
