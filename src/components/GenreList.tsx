import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropImageUrl from "../services/get-crop-image-url";

const GenreList = () => {
	let { data, error } = useGenres();
	return (
		<>
			{error && <Text>{error}</Text>}
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
