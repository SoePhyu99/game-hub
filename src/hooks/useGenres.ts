import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";
import { Genre } from "../entities/Genre";

const useGenres = () =>
	useQuery<FetchData<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient<Genre>("/genres").getAll,
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
