class Item {
    constructor(itemId, name, hindiName, image, category, pricePerUnitToPrint, unit, increment, multiplier) {
        this.itemId = itemId;
        this.name = name;
        this.hindiName = hindiName;
        this.image = image;
        this.category = category;
        this.pricePerUnitToPrint = pricePerUnitToPrint;
        this.unit = unit;
        this.increment = increment;
        this.multiplier = multiplier;
    }
}

export default Item;