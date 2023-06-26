import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

interface Props {
	onSubmit: (searchText: string) => void;
}
const Navbar = ({ onSubmit }: Props) => {
	return (
		<HStack padding={"10px"}>
			<Image src={logo} boxSize="60px" />
			<SearchInput onSubmit={onSubmit}></SearchInput>
			<SwitchColorMode />
		</HStack>
	);
};

export default Navbar;
