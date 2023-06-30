import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchData } from "../services/api-client";
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
	return useQuery<FetchData<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () => apiClient<Game>("/games").get(request),
		staleTime: 24 * 60 * 60 * 1000,
	});
};

export default useGames;
