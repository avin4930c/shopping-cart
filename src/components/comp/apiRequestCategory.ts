function apiRequestCategory(category: string) { //to return data about search details to navigate and fetch data accordingly using rawg-Api
    const categoryMain = category.split("-")[1];
    let mainTitle = "";
    if (category.split("-")[2] === undefined) {
        mainTitle = "Most Popular";
        return { searchTitle: "mostPopular", mainTitle: mainTitle };
    }

    const detail: string | number = category.split("-")[2];
    mainTitle = `By ${detail}`;

    switch (categoryMain) {
        case "year":
            return ({ searchTitle: "year", year: Number(detail), mainTitle: mainTitle });
        case "platform":
            return { searchTitle: "platform", platform: category.split("-")[3], mainTitle: mainTitle };
        case "genre":
            return { searchTitle: "genre", genre: detail, mainTitle: mainTitle };
    }
}

export { apiRequestCategory };