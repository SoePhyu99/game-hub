import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSubmit: (searchText: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
	let ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) onSubmit(ref.current.value);
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search game ..."
					variant="filled"
				></Input>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
