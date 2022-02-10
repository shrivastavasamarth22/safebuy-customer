export const CHANGE_CUSTOMER_ADDRESS = 'CHANGE_CUSTOMER_ADDRESS';
export const CHANGE_CUSTOMER_PICTURE = 'CHANGE_CUSTOMER_PICTURE';

export const changeCustomerAddress = (id, newAddress1, newAddress2, newLandmark, newPinCode, newLat, newLng) => {
    return {
        type: CHANGE_CUSTOMER_ADDRESS,
        payload: {
            id,
            newAddress1,
            newAddress2,
            newLandmark,
            newPinCode,
            newLat,
            newLng
        }
    }
}

export const changeCustomerPicture = (id, newUri) => {
    return {
        type: CHANGE_CUSTOMER_PICTURE,
        payload: {
            id,
            newUri
        }
    }
}

