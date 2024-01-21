const key = "aa4f3e05636f41e8b72550ea24ccd3ec";

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
    screenshot?: boolean;
    searchTitle?: string;
    searchDetails?: searchDetailsProps;
}

async function getApiDetails({size = 10, id, searchTitle, searchDetails} : getApiDetailsProps) {
    const ordering = "";
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
    // console.log(mainQuery, "hello");
    const response = await fetch(mainQuery);
    const data = await response.json();
    return (id ? data : data.results);
}

export { getApiDetails }