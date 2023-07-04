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

export class ApiClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) =>
		axiosConstant
			.get<FetchData<T>>(this.endpoint, { ...config })
			.then((res) => res.data);

	get = (id?: string | number) =>
		axiosConstant.get<T>(this.endpoint + `/${id}`).then((res) => res.data);
}
