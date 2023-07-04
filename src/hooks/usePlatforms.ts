import { useQuery } from "@tanstack/react-query";
import { ApiClient, FetchData } from "../services/api-client";
import parent_platforms from "../data/parent_platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
	useQuery<FetchData<Platform>, Error>({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: parent_platforms,
	});

export default usePlatforms;
