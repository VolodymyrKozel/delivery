import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    ],
    address = "100 some random street",
    openingHours = "08:00 - 22:00",
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title style={styles.title}>{name}</Title>
    </RestaurantCard>
  );
};
