import { useQuery } from "@tanstack/react-query";
import ScreenShot from "../entities/ScreenShots";
import { ApiClient, FetchData } from "../services/api-client";

const useScreenShots = (gameId: number) => {
	const apiClient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
	return useQuery<FetchData<ScreenShot>>({
		queryKey: ["Screenshots", gameId],
		queryFn: apiClient.getAll,
	});
};

export default useScreenShots;
