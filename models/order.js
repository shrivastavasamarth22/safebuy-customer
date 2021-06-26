import moment from 'moment';

export class HomeDeliveryOrder {
    constructor(id, items, totalAmount, date, category, status, shopId) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
        this.category = category;
        this.status = status;
        this.shopId = shopId
    }

    get readableDate() {
        return moment(this.date).format('Do MMMM YYYY, hh:mm')
    }
}

export class WalkInOrder {
    constructor(id, items, totalAmount, date, category, tokenNo, shopId) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
        this.category = category;
        this.tokenNo = tokenNo
        this.shopId = shopId
    }

    get readableDate() {
        return moment(this.date).format('Do MMMM YYYY, hh:mm')
    }
}
