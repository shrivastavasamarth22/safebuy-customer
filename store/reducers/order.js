import {ADD_ORDER, DELETE_ORDER} from "../actions/order";
import {HomeDeliveryOrder, WalkInOrder} from "../../models/order";

const initialState = {
    orders: []
};

const randomId = () => {
    return Math.random().toString(36).substr(2, 4).toUpperCase();
}

const randomToken = () => {
    return `0${Math.floor(Math.random() * 10)}`
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            let newOrder;
            if (action.orderData.category === "homeDelivery") {
                newOrder = new HomeDeliveryOrder(
                    randomId(),
                    action.orderData.items,
                    action.orderData.amount,
                    new Date(),
                    action.orderData.category,
                    "not confirmed",
                    action.orderData.shopId
                )
            } else if (action.orderData.category === "walkIn") {
                newOrder = new WalkInOrder(
                    randomId(),
                    action.orderData.items,
                    action.orderData.amount,
                    new Date(),
                    action.orderData.category,
                    randomToken(),
                    action.orderData.shopId
                )
            }

            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }

        case DELETE_ORDER:
            const orderId = action.orderId;
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== orderId)
            }

    }

    return state
}