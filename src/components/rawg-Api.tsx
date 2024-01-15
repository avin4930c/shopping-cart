const key = "aa4f3e05636f41e8b72550ea24ccd3ec";

type getApiDetailsProps = {
    size?: number;
}

async function getApiDetails({size = 10} : getApiDetailsProps) {
    const ordering = "";
    const response = await fetch(`https://api.rawg.io/api/games?key=${key}&ordering=${ordering}&page_size=${size}`);
    const data = await response.json();
    console.log(data.results);
    return data.results;
}

export { getApiDetails }