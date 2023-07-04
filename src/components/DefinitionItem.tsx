import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { ReactNode } from "react";

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<>
			<Box marginY={5}>
				<Heading as="dt" color="gray.600" size="sm">
					{term}
				</Heading>
				<dd>{children}</dd>
			</Box>
		</>
	);
};

export default DefinitionItem;