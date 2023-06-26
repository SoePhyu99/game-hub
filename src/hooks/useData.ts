import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchData<T>{
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig ?: AxiosRequestConfig, deps?: any[]) => {
    let [data, setData] = useState<T[]>([]);
	let [error, setError] = useState("");
    let [isLoading, setLoading] = useState(false);

	useEffect(() => {
        let controller = new AbortController();
        setLoading(true);
		apiClient
			.get<FetchData<T>>(endpoint, {signal: controller.signal, ...requestConfig})
			.then((res) => {
                setData(res.data.results);
            setLoading(false)})
			.catch((e) => {
                if(e instanceof CanceledError) return;
                setError(e.message);
            setLoading(false)});
        return () => controller.abort();
	}, deps ? [...deps] : []);

    return {data, error, isLoading};
}

export default useData;