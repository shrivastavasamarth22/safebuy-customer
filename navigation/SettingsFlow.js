import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { UserSettings, CameraScreen, SaveScreen } from '../screens'

const Stack = createStackNavigator();

const SettingsFlow = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Settings"}
                component={UserSettings}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={"Camera"}
                component={CameraScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={"SaveScreen"}
                component={SaveScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}


export default SettingsFlow
