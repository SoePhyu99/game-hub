import Game from "../entities/Game";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";
import getCropImageUrl from "../services/get-crop-image-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";
interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<Card height={"100%"}>
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
				<Link to={`/games/${game.slug}`}>
					<Heading fontSize="1.3rem">{game.name}</Heading>
				</Link>
				<Emojis rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
