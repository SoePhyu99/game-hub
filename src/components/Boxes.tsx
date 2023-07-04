import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Boxes = ({ children }: Props) => {
	return (
		<Box
			_hover={{
				transform: "scale(1.05)",
				transition: "transform ease-in 0.5s",
			}}
			borderRadius={10}
			overflow="hidden"
			width="100%"
		>
			{children}
		</Box>
	);
};

export default Boxes;
