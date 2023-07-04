import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandText = ({ children }: Props) => {
	let [expanded, setExpanded] = useState(false);
	let limit = 300;
	if (!children) return null;
	if (children.length <= limit) {
		return <Text>{children}</Text>;
	}
	let summary = expanded ? children : children.substring(0, limit) + "...";
	return (
		<>
			<Text>
				{summary}
				<Button
					marginLeft={"5px"}
					onClick={() => {
						setExpanded(!expanded);
					}}
					size={"xs"}
					colorScheme="blue"
				>
					{expanded ? "Show Less" : "Read More"}
				</Button>
			</Text>
		</>
	);
};

export default ExpandText;
