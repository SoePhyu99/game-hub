import apiClient from "../services/api-client";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () => apiClient<Genre>("/genres", "genre").get();

export default useGenres;
