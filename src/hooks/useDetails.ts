import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

const useDetails = (slug?: string) => {
	return useQuery<Game, Error>({
		queryKey: ["games", slug],
		queryFn: () => apiClient<Game>("/games").get(slug),
	});
};

export default useDetails;
