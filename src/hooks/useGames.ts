import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
	const request = {
		params: {
			genres: gameQuery.genre?.id,
			parent_platforms: gameQuery.platform?.id,
			ordering: gameQuery.sortOrder,
			search: gameQuery.searchText,
		},
	};
	return apiClient<Game>("/games", "games", { ...request }).get();
};

export default useGames;
