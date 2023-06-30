import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import parent_platforms from "../data/parent_platforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery<FetchData<Platform>, Error>({
		queryKey: ["platforms"],
		queryFn: apiClient<Platform>("/platforms/lists/parents").getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: {
			count: parent_platforms.length,
			results: parent_platforms,
			next: null,
		},
	});

export default usePlatforms;
