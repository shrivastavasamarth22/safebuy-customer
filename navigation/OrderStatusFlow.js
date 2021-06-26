import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { OrderStatusScreen, OrderStatusHomeDeliveryConfirmed, OrderStatusHomeDelivery, OrderStatusWalkIn } from '../screens'

const Stack = createStackNavigator();

const OrderStatusFlow = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Order Status"
                component={OrderStatusScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="OrderStatusHomeDeliveryExpanded"
                component={OrderStatusHomeDelivery}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="OrderStatusExpandedConfirmed"
                component={OrderStatusHomeDeliveryConfirmed}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrderStatusWalkInExpanded"
                component={OrderStatusWalkIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default OrderStatusFlow
