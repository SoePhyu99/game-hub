import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}

interface FetchGenreResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {
    let [genres, setGenres] = useState<Genre[]>([]);
	let [error, setError] = useState("");
    let [isLoading, setLoading] = useState(false);

	useEffect(() => {
        let controller = new AbortController();
        setLoading(true);
        console.log('start fetching...');
		apiClient
			.get<FetchGenreResponse>("/genres", {signal: controller.signal})
			.then((res) => {
                setGenres(res.data.results);
            setLoading(false)})
			.catch((e) => {
                if(e instanceof CanceledError) return;
                setError(e.message)});
        return () => controller.abort();
	}, []);

    return {genres, error, isLoading};
}

export default useGenres;