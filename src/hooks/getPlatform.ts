import usePlatforms from "./usePlatforms";

const getPlatform = (platformId?: number) => {
	const { data } = usePlatforms();
	return data?.results.find((p) => p.id === platformId);
};

export default getPlatform;
