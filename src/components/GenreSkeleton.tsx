import {
	HStack,
	List,
	ListItem,
	Skeleton,
	SkeletonText,
	Slide,
	Text,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
	let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<List>
			{data.map((d) => (
				<ListItem key={d} paddingY="5px">
					<HStack>
						<Skeleton width="32px" height="32px"></Skeleton>
						<Skeleton
							height="20px"
							width="100%"
							borderRadius="3px"
						/>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreSkeleton;
