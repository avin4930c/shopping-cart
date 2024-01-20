type apiRequestCategoryProps = {
    searchTitle: string;
    year?: number | undefined;
    platform?: string | undefined;
    genre?: string | undefined;
    mainTitle: string;
}

function apiRequestCategory(category: string) { //to return data about search details to navigate and fetch data accordingly using rawg-Api
    const categoryMain = category.split("-")[1];
    let mainTitle = "";
    if (category.split("-")[2] === undefined) {
        mainTitle = "Most Popular";
        return {searchTitle: "mostPopular", mainTitle: mainTitle};
    }

    const detail: string | number = category.split("-")[2];
    mainTitle = `By ${detail}`;

    switch (categoryMain) {
        case "year":
            return ({searchTitle: "year", year: Number(detail), mainTitle: mainTitle});
        case "platform":
            return {searchTitle: "platform", platform: category.split("-")[3], mainTitle: mainTitle};
        case "genre":
            return {searchTitle: "genre", genre: detail, mainTitle: mainTitle};
    }
    // if (categoryMain === "year") {
    //     const year = category.split("-")[2];
    //     mainTitle = `By ${year}`;
    //     return {searchTitle: "year", year: year, mainTitle: mainTitle};
    // }
    // else if (categoryMain === "platform") {
    //     const platform = category.split("-")[2];
    //     mainTitle = `By ${platform}`;
    //     return {searchTitle: "platform", platform: platform, mainTitle: mainTitle};
    // }
    // else if (categoryMain === "genre") {
    //     const genre = category.split("-")[2];
    //     mainTitle = `By ${genre}`;
    //     return {searchTitle: "genre", genre: genre, mainTitle: mainTitle};
    // }
}

export { apiRequestCategory };