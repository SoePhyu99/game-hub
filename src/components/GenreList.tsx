import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "../services/get-crop-image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
							<Text>{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
