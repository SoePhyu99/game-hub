import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface FetchGameResponse {
	count: number;
	results: Game[];
}

interface Game {
	id: number;
	name: string;
}

const GameGrid = () => {
	let [games, setGames] = useState<Game[]>([]);
	let [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGameResponse>("/games")
			.then((res) => setGames(res.data.results))
			.catch((e) => setError(e.message));
	});
	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
