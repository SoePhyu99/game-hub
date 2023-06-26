import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumb from "../assets/thumbs-up.webp";

interface Props {
	rating: number;
}

const Emojis = ({ rating }: Props) => {
	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "20px" },
		4: { src: thumb, alt: "recommanded", boxSize: "20px" },
		5: { src: bullEye, alt: "expectional", boxSize: "25px" },
	};
	return <Image marginTop={1} {...emojiMap[rating]} />;
};

export default Emojis;
