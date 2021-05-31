import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { CreditHistory, CreditSummaryScreen } from '../screens'

const Stack = createStackNavigator();

const CreditHistoryFlow = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Credit History"
                component={CreditHistory}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Credit Summary"
                component={CreditSummaryScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default CreditHistoryFlow