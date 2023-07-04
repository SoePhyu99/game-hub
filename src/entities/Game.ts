import Genre from "./Genre";
import Platform from "./Platform";
import Publishers from "./Publishers";

export default interface Game {
	id: number;
	name: string;
	background_image: string;
	slug: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
	description_raw: string;
	publishers: Publishers[];
	genres: Genre[];
}
