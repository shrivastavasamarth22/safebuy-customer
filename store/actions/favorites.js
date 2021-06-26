export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = shopId => {
    return { type: ADD_TO_FAVORITES, shopId }
}

export const removeFromFavorites = shopId => {
    return { type: REMOVE_FROM_FAVORITES, shopId }
}