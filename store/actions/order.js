export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER'

export const addOrder = (bagItems, totalAmount, category, shopId) => {
    return {
        type: ADD_ORDER,
        orderData: {
            items: bagItems,
            amount: totalAmount,
            category,
            shopId
        }
    }
}

export const deleteOrder = (orderId) => {
    return {
        type: DELETE_ORDER,
        orderId
    }
}