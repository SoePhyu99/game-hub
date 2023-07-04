import { useQuery } from "@tanstack/react-query";
import { ApiClient, FetchData } from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTrailer = (id?: number) => {
	const apiClient = new ApiClient<Trailers>(`/games/${id}/movies`);
	return useQuery<FetchData<Trailers>>({
		queryKey: ["trailer", id],
		queryFn: apiClient.getAll,
	});
};
export default useTrailer;
