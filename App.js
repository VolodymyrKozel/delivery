import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
