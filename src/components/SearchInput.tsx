import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
	let setSearchText = useGameQueryStore((s) => s.setSearchText);
	let ref = useRef<HTMLInputElement>(null);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setSearchText(ref.current?.value);
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
