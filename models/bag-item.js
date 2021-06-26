class BagItem {
    constructor(itemId, name, hindiName, image, category, pricePerUnitToPrint, unit, increment, multiplier, qty, sum) {
        this.itemId = itemId;
        this.name = name;
        this.hindiName = hindiName;
        this.image = image;
        this.category = category;
        this.pricePerUnitToPrint = pricePerUnitToPrint;
        this.unit = unit;
        this.increment = increment;
        this.multiplier = multiplier;
        this.qty = qty;
        this.sum = sum;
    }
}

export default BagItem