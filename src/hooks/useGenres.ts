import { useQuery } from "@tanstack/react-query";
import { ApiClient, FetchData } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import Genre from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
	useQuery<FetchData<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
