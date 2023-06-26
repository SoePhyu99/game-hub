import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/get-crop-image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
	let { data, isLoading, error } = useGenres();
	if (error) return null;
	if (isLoading) return <GenreSkeleton />;
	return (
		<>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								src={getCropImageUrl(genre.image_background)}
								borderRadius={"5px"}
							/>
							<Button
								fontWeight={
									genre.id === selectedGenre?.id
										? "bold"
										: "normal"
								}
								fontSize="lg"
								onClick={() => onSelectedGenre(genre)}
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
