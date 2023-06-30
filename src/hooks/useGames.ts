import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchData } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchData<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient<Game>("/games").getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		staleTime: ms("24h"),
		getNextPageParam: (lastPage, allPages) =>
			lastPage.next ? allPages.length + 1 : undefined,
	});

export default useGames;
