import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const Boxes = ({ children }: Props) => {
	return (
		<Box
			borderRadius={10}
			overflow="hidden"
			width={{ xl: "250px", lg: "200px" }}
		>
			{children}
		</Box>
	);
};

export default Boxes;
