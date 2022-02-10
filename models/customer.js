export class Customer {
    static fromSnapshot(snapshot) {
        return new Customer(snapshot)
    }

    constructor({id, name, address1, address2, landmark, city, state, pinCode, lat, lng, phone, imageUri}) {
        this.id = id;
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.landmark = landmark
        this.city = city;
        this.state = state;
        this.pinCode = pinCode;
        this.lat = lat;
        this.lng = lng;
        this.phone = phone;
        this.imageUri = imageUri;
        this.isImmutable = false
    }

    lock() {
        this.isImmutable = true
        return this
    }

    setAddress(address1,
               address2,
               landmark,
               pinCode,
               newLat,
               newLng) {
        if (this.isImmutable) {
            return Customer.fromSnapshot({
                ...this,
                address1,
                address2,
                landmark,
                pinCode,
                newLat,
                newLng
            })
        }
        this.address1 = address1
        this.address2 = address2
        this.landmark = landmark
        this.pinCode = pinCode
        return this
    }

    setImage(imageUri) {
        if (this.isImmutable) {
            return Customer.fromSnapshot({...this, imageUri})
        }
        this.imageUri = imageUri
        return this
    }
}

export default Customer