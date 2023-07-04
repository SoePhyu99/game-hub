import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	let setSearchText = useGameQueryStore((s) => s.setSearchText);
	let ref = useRef<HTMLInputElement>(null);
	let navigate = useNavigate();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				setSearchText(ref.current?.value);
				navigate("/");
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
