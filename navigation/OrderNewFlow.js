import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { OrderNew, 
  SearchScreen, 
  ShopCategoryScreen, 
  NearbyShops, 
  VegetableListScreen, 
  OrderSummaryScreen,
} from '../screens'

const OrderNewFlow = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Order New">
        <Stack.Screen
          name="Order New"
          component={OrderNew}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shop Category"
          component={ShopCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nearby Shops"
          component={NearbyShops}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vegetable List"
          component={VegetableListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order Summary"
          component={OrderSummaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default OrderNewFlow;
