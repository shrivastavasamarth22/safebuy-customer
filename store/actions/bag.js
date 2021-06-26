export const ADD_TO_BAG = 'ADD_TO_BAG';
export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';

export const addToBag = product => {
    return { type: ADD_TO_BAG, product }
}

export const removeFromBag = productId => {
    return { type: REMOVE_FROM_BAG, pid: productId }
}