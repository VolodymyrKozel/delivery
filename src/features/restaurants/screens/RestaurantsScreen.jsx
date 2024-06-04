import { FlatList, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/RestaurantsInfo";
import { StatusBar } from "react-native";
import { Spacer } from "../../../components/utils/spacer";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};

  background-color: white;
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantsInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
}
