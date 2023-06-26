import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "../services/get-crop-image-url";
interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card height={"100%"}>
			<Image
				src={
					game.background_image
						? getCropImageUrl(game.background_image)
						: ""
				}
			/>
			<CardBody>
				<Heading fontSize="1.3rem">{game.name}</Heading>
				<HStack justifyContent="space-between">
					<PlatformList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
