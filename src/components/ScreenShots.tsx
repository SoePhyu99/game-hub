import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
import getCropImageUrl from "../services/get-crop-image-url";

interface Props {
	gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
	let { data } = useScreenShots(gameId);
	return (
		<SimpleGrid columns={{ lg: 2, sm: 1 }} spacing={3} marginY={5}>
			{data?.results.map((screenshot, index) => (
				<Image
					width={"100%"}
					key={index}
					src={getCropImageUrl(screenshot.image)}
				/>
			))}
		</SimpleGrid>
	);
};

export default ScreenShots;
