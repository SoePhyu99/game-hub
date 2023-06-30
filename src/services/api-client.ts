import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
	count: number;
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
	key: string;
	axiosRequestConfig?: AxiosRequestConfig;
	constructor(
		endpoint: string,
		key: string,
		axiosRequestConfig?: AxiosRequestConfig
	) {
		this.endpoint = endpoint;
		this.key = key;
		this.axiosRequestConfig = axiosRequestConfig;
	}

	get = () =>
		useQuery<FetchData<T>, Error>({
			queryKey: [this.key, this.axiosRequestConfig],
			queryFn: () =>
				axiosConstant
					.get(this.endpoint, { ...this.axiosRequestConfig })
					.then((res) => res.data),
			staleTime: 24 * 60 * 60 * 1000, // 24h
		});
}

const apiClient = <T>(
	endpoint: string,
	key: string,
	axiosRequestConfig?: AxiosRequestConfig
) => new ApiClient<T>(endpoint, key, axiosRequestConfig);

export default apiClient;
