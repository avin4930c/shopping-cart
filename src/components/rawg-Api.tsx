const key = "a29a8d297fb740429bc885bf74d311e8";

type searchDetailsProps = {
    searchTitle: string,
    mainTitle: string,
    year?: number | undefined,
    platform?: string | undefined,
    genre?: string | undefined,
}

type getApiDetailsProps = {
    size?: number;
    id?: number;
    year?: number;
    ordering?: string;
    screenshot?: boolean;
    searchTitle?: string;
    searchDetails?: searchDetailsProps;
    setIsLoading?: Function;
}

async function getApiDetails({size = 10, id, searchTitle, searchDetails, ordering, setIsLoading} : getApiDetailsProps) {
    let mainQuery = id ? (!searchTitle ? `https://api.rawg.io/api/games/${id}?key=${key}` : `https://api.rawg.io/api/games/${id}`) : `https://api.rawg.io/api/games?key=${key}&page_size=${size}`;
    if (searchTitle) {
        switch (searchTitle) {
            case "screenshots":
                mainQuery += `/screenshots?key=${key}`;
                break;
            case "year":
                mainQuery += `&dates=${searchDetails?.year}-01-01,${searchDetails?.year}-12-31`;
                break;

            case "platform":
                mainQuery += `&platforms=${searchDetails?.platform}`;
                break;

            case "genre":
                break;
            default:
                mainQuery += "";
        }
    }
    ordering ? mainQuery += `&ordering=${ordering}` : mainQuery += "";
    console.log(mainQuery, "Main query");
    if (setIsLoading) {
        setIsLoading(true);
    }
    try {
        const response = await fetch(mainQuery);
        const data = await response.json();
        return (id ? data : data.results);
    }
    catch(error) {
        console.error("Error getting data", error);
    }
    finally {
        if (setIsLoading) {
            setIsLoading(false);
        }
    }
}

export { getApiDetails }