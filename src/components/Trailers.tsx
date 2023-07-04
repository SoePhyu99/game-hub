import { Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
	id: number;
}

const Trailers = ({ id }: Props) => {
	let { data, error, isLoading } = useTrailer(id);
	if (isLoading) return <Spinner />;
	if (error) throw new Error();

	const first = data?.results[0];
	return first ? (
		<video src={first.data[480]} poster={first.preview} controls></video>
	) : null;
};

export default Trailers;
