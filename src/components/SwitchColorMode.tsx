import { useColorMode, Switch, HStack, Text } from "@chakra-ui/react";

const SwitchColorMode = () => {
	let { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
				colorScheme="green"
			/>
			<Text whiteSpace="nowrap">Dark Mode</Text>
		</HStack>
	);
};

export default SwitchColorMode;
