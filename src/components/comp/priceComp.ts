function priceComp(price: number) {
    let finalPrice = Math.round(price / 10000) * 10000;
    if (String(finalPrice).length > 4) {
        finalPrice = Number(String(finalPrice).slice(0, 4));
    }
    if (finalPrice === 0) {
        finalPrice = 1000;
    }
    return finalPrice;
}

export { priceComp }