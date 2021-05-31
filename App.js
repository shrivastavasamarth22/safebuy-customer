import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import StackNavigator from "./navigation/StackNavigator"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
