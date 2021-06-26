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

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    bag: bagReducer,
    order: orderReducer,
    customer: customerReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
    return Font.loadAsync({
        'uber_move_medium': require('./assets/fonts/UberMoveMedium.otf'),
        'uber_move_bold': require('./assets/fonts/UberMoveBold.otf'),
        'Roboto_400Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto_500Medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto_700Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'yantramanav_regular': require('./assets/fonts/Yantramanav-Regular.ttf'),
        'yantramanav_medium': require('./assets/fonts/Yantramanav-Medium.ttf'),
        'yantramanav_bold': require('./assets/fonts/Yantramanav-Bold.ttf')
    })
}

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false)

    if (!fontsLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontsLoaded(true)
                }}
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
