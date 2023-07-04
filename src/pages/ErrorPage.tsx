import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
	let error = useRouteError();
	return (
		<>
			<Navbar />
			<Box padding={5}>
				<Heading>Oops!</Heading>
				<p>
					{isRouteErrorResponse(error)
						? "The page is not exist!"
						: "An expected error!"}
				</p>
			</Box>
		</>
	);
};

export default ErrorPage;
