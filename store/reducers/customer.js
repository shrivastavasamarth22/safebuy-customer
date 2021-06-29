import {CHANGE_CUSTOMER_ADDRESS, CHANGE_CUSTOMER_PICTURE} from "../actions/customer";
import Customer from "../../models/customer";
import * as MediaLibrary from 'expo-media-library';

// How to create an interval

// const doSomething = () => console.log("something")
//
// React.useEffect(() => {
//     let timer
//     const handler = () => {
//         timer = setTimeout(() => {
//             clearTimeout(timer)
//             doSomething()
//             handler();
//         }, 5000)
//     }
//
//     return () => {
//         clearTimeout(timer)
//     }
// }, [])

const initialState = {
    customer: new Customer({
        id: 1,
        name: "Samarth Shrivastava",
        address1: "A-3/603 Vishnu Hitech City",
        address2: "Near Dana Pani Restaurant, Bawadiya Kalan",
        landmark: "Bawadiya Railway Crossing",
        city: "Bhopal",
        state: "Madhya Pradesh",
        pinCode: "462026",
        phone: 9406523103,
        imageUri: ""
    }).lock()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CUSTOMER_ADDRESS: {
            const {newAddress1, newAddress2, newLandmark, newPinCode} = action.payload
            const customer = state.customer.setAddress(newAddress1, newAddress2, newLandmark, newPinCode)
            return {...state, customer }
        }

        case CHANGE_CUSTOMER_PICTURE: {
            const customer = state.customer.setImage(action.payload.newUri)
            return {...state, customer }
        }

        default:
            return state
    }
}