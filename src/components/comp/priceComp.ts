function priceComp(price: number) {
    
    if (typeof(price) !== 'number') {
        return 0;
    }

    let finalPrice: number = Math.round(price / 10000) * 10000;
    if (String(finalPrice).length > 4) {
        finalPrice = Number(String(finalPrice).slice(0, 4));
    }
    if (finalPrice <= 0) {
        finalPrice = 1000;
    }
    return finalPrice;
}

export { priceComp }