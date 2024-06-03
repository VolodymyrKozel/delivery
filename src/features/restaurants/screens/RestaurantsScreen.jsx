import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/RestaurantsInfo";
import { StatusBar } from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

  background-color: white;
`;

const SearchContainer = styled.View`
  background-color: white;
  padding: 16px;
`;

const ListContainer = styled.View`
  flex: 1;
  padding: 16px;
  background-color: gold;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantsInfo />
      </ListContainer>
    </SafeArea>
  );
}

/* const styles = StyleSheet.create({
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
}); */
