import apiClient from "../services/api-client";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	apiClient<Platform>("/platforms/lists/parents", "platforms").get();

export default usePlatforms;
