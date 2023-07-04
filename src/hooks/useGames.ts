import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	return useInfiniteQuery<FetchData<Game>, Error>({
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
};

export default useGames;
