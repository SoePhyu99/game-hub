import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGameResponse {
	count: number;
	results: Game[];
}
export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
	id: number;
	name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}

const useGames = () => {
    let [games, setGames] = useState<Game[]>([]);
	let [error, setError] = useState("");
    let [isLoading, setLoading] = useState(false);

	useEffect(() => {
        let controller = new AbortController();
        setLoading(true);
        console.log('start fetching...');
		apiClient
			.get<FetchGameResponse>("/games", {signal: controller.signal})
			.then((res) => {
                setGames(res.data.results);
            setLoading(false)})
			.catch((e) => {
                if(e instanceof CanceledError) return;
                setError(e.message)});
        return () => controller.abort();
	}, []);

    return {games, error, isLoading};
}

export default useGames;