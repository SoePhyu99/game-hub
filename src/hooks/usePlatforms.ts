import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import parent_platforms from "../data/parent_platforms";
import ms from "ms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery<FetchData<Platform>, Error>({
		queryKey: ["platforms"],
		queryFn: apiClient<Platform>("/platforms/lists/parents").getAll,
		staleTime: ms("24h"),
		initialData: parent_platforms,
	});

export default usePlatforms;
