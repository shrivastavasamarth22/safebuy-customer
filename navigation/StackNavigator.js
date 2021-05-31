import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { OrderNewFlow, OrderStatusFlow, CreditHistoryFlow } from ".";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false
        }}>
            <Stack.Screen
                name="OrderNewFlow"
                component={OrderNewFlow}
            />
            <Stack.Screen
                name="OrderStatusFlow"
                component={OrderStatusFlow}
            />
            <Stack.Screen
                name="CreditHistoryFlow"
                component={CreditHistoryFlow}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
