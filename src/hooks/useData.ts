import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchData<T>{
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
    let [data, setData] = useState<T[]>([]);
	let [error, setError] = useState("");
    let [isLoading, setLoading] = useState(false);

	useEffect(() => {
        let controller = new AbortController();
        setLoading(true);
        console.log('start fetching...');
		apiClient
			.get<FetchData<T>>(endpoint, {signal: controller.signal})
			.then((res) => {
                setData(res.data.results);
            setLoading(false)})
			.catch((e) => {
                if(e instanceof CanceledError) return;
                setError(e.message)});
        return () => controller.abort();
	}, []);

    return {data, error, isLoading};
}

export default useData;