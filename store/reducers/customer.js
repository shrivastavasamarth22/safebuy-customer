import {CHANGE_CUSTOMER_ADDRESS, CHANGE_CUSTOMER_PICTURE} from "../actions/customer";
import Customer from "../../models/customer";
import * as MediaLibrary from 'expo-media-library';


const checkForImage = async () => {
    const result = await MediaLibrary.getAssetsAsync();
    const { uri } = result.assets[result.assets.length - 1]
    return uri
}

const initialState = {
    customer: new Customer(
        1,
        "Samarth Shrivastava",
        "A-3/603 Vishnu Hitech City",
        "Near Dana Pani Restaurant, Bawadiya Kalan",
        "Bawadiya Railway Crossing",
        "Bhopal",
        "Madhya Pradesh",
        "462026",
        9406523103,
        ""
    )
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CUSTOMER_ADDRESS:
            let { id, newAddress1, newAddress2, newLandmark, newPinCode } = action.payload

            let newCustomer =  new Customer(
                id,
                state.customer.name,
                newAddress1,
                newAddress2,
                newLandmark,
                state.customer.city,
                state.customer.state,
                newPinCode,
                state.customer.phone,
                state.customer.imageUri
            )

            return {
                ...state,
                customer: newCustomer
            }

        case CHANGE_CUSTOMER_PICTURE:
            const { newUri } = action.payload

                let newCstmr = new Customer(
                action.payload.id,
                state.customer.name,
                state.customer.address1,
                state.customer.address2,
                state.customer.landmark,
                state.customer.city,
                state.customer.state,
                state.customer.pinCode,
                state.customer.phone,
                newUri
            )

            return {
                ...state,
                customer: newCstmr
            }

        default:
            return state
    }
}