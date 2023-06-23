import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGameResponse {
	count: number;
	results: Game[];
}

interface Game {
	id: number;
	name: string;
}

const useGames = () => {
    let [games, setGames] = useState<Game[]>([]);
	let [error, setError] = useState("");

	useEffect(() => {
        let controller = new AbortController();
		apiClient
			.get<FetchGameResponse>("/games", {signal: controller.signal})
			.then((res) => setGames(res.data.results))
			.catch((e) => {
                if(e instanceof CanceledError) return;
                setError(e.message)});
            console.log('hello');
        return () => controller.abort();
	}, []);

    return {games, error};
}

export default useGames;