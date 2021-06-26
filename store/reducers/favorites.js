import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favorites";

const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.concat(action.shopId)
            }

        case REMOVE_FROM_FAVORITES:
            const filteredList = state.favorites.filter((id) => id !== action.shopId);
            return {
                ...state,
                favorites: filteredList
            }

        default:
            return state;
    }
}