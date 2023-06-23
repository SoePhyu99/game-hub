import { Badge } from "@chakra-ui/react";

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	let color = score > 75 ? "green" : score < 60 ? "red" : "";
	return (
		<Badge colorScheme={color} paddingX={1} borderRadius="4px">
			{score}
		</Badge>
	);
};

export default CriticScore;
