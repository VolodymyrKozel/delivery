import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/RestaurantsInfo";
import { StatusBar } from "react-native";

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <Searchbar />
      </View>
      <View style={styles.listWrapper}>
        <RestaurantsInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputWrapper: {
    padding: 16,
  },
  listWrapper: {
    flex: 1,
    padding: 16,
  },
});
