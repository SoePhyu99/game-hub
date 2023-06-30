import { useQuery } from "@tanstack/react-query";
import parent_platforms from "../data/parent_platforms";
import apiClient, { FetchData } from "../services/api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery<FetchData<Platform>, Error>({
		queryKey: ["platforms"],
		queryFn: apiClient<Platform>("/platforms/lists/parents").get,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: {
			count: parent_platforms.length,
			results: parent_platforms,
		},
	});

export default usePlatforms;
