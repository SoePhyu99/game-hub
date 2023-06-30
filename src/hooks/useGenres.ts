import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import genres from "../data/genres";
import ms from "ms";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery<FetchData<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient<Genre>("/genres").getAll,
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
