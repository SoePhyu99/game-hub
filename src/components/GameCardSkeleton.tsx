import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width={{ sm: "100%", lg: "250px" }}>
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText></SkeletonText>
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
