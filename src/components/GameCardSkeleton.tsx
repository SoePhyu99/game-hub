import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import Boxes from "./Boxes";

const GameCardSkeleton = () => {
	return (
		<Boxes>
			<Card>
				<Skeleton height="200px" />
				<CardBody>
					<SkeletonText></SkeletonText>
				</CardBody>
			</Card>
		</Boxes>
	);
};

export default GameCardSkeleton;
