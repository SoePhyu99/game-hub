import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosConstant = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "203c3cae8c3a44a6a49d7ed7d1afb884",
	},
});

class ApiClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	get = (config: AxiosRequestConfig) =>
		axiosConstant
			.get<FetchData<T>>(this.endpoint, { ...config })
			.then((res) => res.data);
}

const apiClient = <T>(endpoint: string) => new ApiClient<T>(endpoint);

export default apiClient;
