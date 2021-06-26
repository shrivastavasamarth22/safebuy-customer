export class Customer {
    constructor(id, name, address1, address2, landmark, city, state, pinCode, phone, imageUri) {
        this.id = id;
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.landmark = landmark
        this.city = city;
        this.state = state;
        this.pinCode = pinCode;
        this.phone = phone;
        this.imageUri = imageUri;
    }
}

export default Customer