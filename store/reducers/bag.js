import {ADD_TO_BAG, REMOVE_FROM_BAG} from "../actions/bag";
import {ADD_ORDER} from "../actions/order";
import BagItem from "../../models/bag-item";

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BAG:
            const addedProduct = action.product;

            let updatedOrNewBagItem;

            if (!!state.items[addedProduct.itemId]) {
                updatedOrNewBagItem = new BagItem(
                    addedProduct.itemId,
                    addedProduct.name,
                    addedProduct.hindiName,
                    addedProduct.image,
                    addedProduct.category,
                    addedProduct.pricePerUnitToPrint,
                    addedProduct.unit,
                    addedProduct.increment,
                    addedProduct.multiplier,
                    state.items[addedProduct.itemId].qty + addedProduct.increment,
                    state.items[addedProduct.itemId].sum + (addedProduct.increment * addedProduct.multiplier)
                );
            } else {
                updatedOrNewBagItem = new BagItem(
                    addedProduct.itemId,
                    addedProduct.name,
                    addedProduct.hindiName,
                    addedProduct.image,
                    addedProduct.category,
                    addedProduct.pricePerUnitToPrint,
                    addedProduct.unit,
                    addedProduct.increment,
                    addedProduct.multiplier,
                    addedProduct.increment,
                    addedProduct.increment * addedProduct.multiplier
                )
            }
            return {
                ...state,
                items: {...state.items, [addedProduct.itemId]: updatedOrNewBagItem},
                totalAmount: state.totalAmount + (addedProduct.increment * addedProduct.multiplier)
            }

        case REMOVE_FROM_BAG:
            const selectedBagItem = state.items[action.pid];
            const currentQty = selectedBagItem.qty;
            const newQty = currentQty - selectedBagItem.increment

            let updatedBagItems;

            if (newQty > 0) {
                // need to reduce it not erase it
                const updatedBagItem = new BagItem(
                    selectedBagItem.itemId,
                    selectedBagItem.name,
                    selectedBagItem.hindiName,
                    selectedBagItem.image,
                    selectedBagItem.category,
                    selectedBagItem.pricePerUnitToPrint,
                    selectedBagItem.unit,
                    selectedBagItem.increment,
                    selectedBagItem.multiplier,
                    newQty,
                    selectedBagItem.sum - (selectedBagItem.increment * selectedBagItem.multiplier)
                );
                updatedBagItems = {...state.items, [action.pid]: updatedBagItem}
            } else {
                // need to erase it
                updatedBagItems = {...state.items};
                delete updatedBagItems[action.pid]
            }
            return {
                ...state,
                items: updatedBagItems,
                totalAmount: state.totalAmount - (selectedBagItem.increment * selectedBagItem.multiplier)
            }

        case ADD_ORDER:
            return initialState

        default:
            return state;
    }
}