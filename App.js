import { StatusBar } from "expo-status-bar";
import React from "react";
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}
