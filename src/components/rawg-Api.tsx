const key = "aa4f3e05636f41e8b72550ea24ccd3ec";

type getApiDetailsProps = {
    size?: number;
    id?: number;
    screenshot?: boolean;
}

async function getApiDetails({size = 10, id = undefined, screenshot = false} : getApiDetailsProps) {
    const ordering = "";
    const mainId = id;
    const mainQuery = mainId ? (screenshot ? `https://api.rawg.io/api/games/${mainId}/screenshots?key=${key}` : `https://api.rawg.io/api/games/${mainId}?key=${key}` ) : `https://api.rawg.io/api/games?key=${key}&ordering=${ordering}&page_size=${size}&id=${mainId}`;
    console.log(mainQuery);
    const response = await fetch(`${mainQuery}`);
    const data = await response.json();
    return (id ? data : data.results);
}

export { getApiDetails }