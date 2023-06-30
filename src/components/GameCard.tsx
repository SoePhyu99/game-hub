import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "../services/get-crop-image-url";
import Emojis from "./Emojis";
interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card
			height={"100%"}
			onClick={() => console.log(game.parent_platforms)}
		>
			<Image src={getCropImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent="space-between">
					<PlatformList
						platforms={
							game.parent_platforms?.map((p) => p.platform) || []
						}
					/>
					<CriticScore score={game.metacritic}></CriticScore>
				</HStack>
				<Heading fontSize="1.3rem">{game.name}</Heading>
				<Emojis rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
