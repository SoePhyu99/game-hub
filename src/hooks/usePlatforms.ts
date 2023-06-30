import { useQuery } from "@tanstack/react-query";
import parent_platforms from "../data/parent_platforms";
import apiClient, { FetchData } from "../services/api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["parent_platforms"],
		queryFn: () =>
			apiClient
				.get<FetchData<Platform>>("/platforms/lists/parents")
				.then((res) => res.data.results),
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: parent_platforms,
	});

export default usePlatforms;
