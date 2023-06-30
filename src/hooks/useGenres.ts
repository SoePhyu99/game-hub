import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery<FetchData<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient<Genre>("/genres").getAll,
		staleTime: 24 * 60 * 60 * 1000,
		initialData: genres,
	});

export default useGenres;
