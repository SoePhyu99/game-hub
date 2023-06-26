import parent_platforms from "../data/parent_platforms";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: parent_platforms, isLoading: false, error: null});

export default usePlatforms;