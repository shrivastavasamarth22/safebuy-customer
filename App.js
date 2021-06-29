import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

import favoritesReducer from './store/reducers/favorites'
import bagReducer from './store/reducers/bag'
import orderReducer from './store/reducers/order'
import customerReducer from './store/reducers/customer'

import StackNavigator from "./navigation/StackNavigator"
import * as MediaLibrary from "expo-media-library";
import {changeCustomerPicture} from "./store/actions/customer"

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    bag: bagReducer,
    order: orderReducer,
    customer: customerReducer
})

const store = createStore(rootReducer);

const setupProfilePic = async () => {
    const result = await MediaLibrary.getAssetsAsync();
    if (!result.assets.length) return
    const {uri} = result.assets[result.assets.length - 1]
    const id = store.getState().customer.id
    store.dispatch(changeCustomerPicture(id, uri))
}

const setupFonts = () => Font.loadAsync({
    'uber_move_medium': require('./assets/fonts/UberMoveMedium.otf'),
    'uber_move_bold': require('./assets/fonts/UberMoveBold.otf'),
    'Roboto_400Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto_500Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto_700Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'yantramanav_regular': require('./assets/fonts/Yantramanav-Regular.ttf'),
    'yantramanav_medium': require('./assets/fonts/Yantramanav-Medium.ttf'),
    'yantramanav_bold': require('./assets/fonts/Yantramanav-Bold.ttf')
})

const setup = async () => {
    try {
        console.log("---- Starting Setup ----")
        await Promise.all([setupFonts(), setupProfilePic()])
        console.log("---- Setup Finished ----")
    } catch (e) {
        console.log("---- Setup Failed ----")
        console.log(e.message)
    }
}

export default function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={setup}
                onFinish={() => setIsReady(true)}
                onError={(err) => console.error(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigator/>
            </NavigationContainer>
        </Provider>
    );
}
