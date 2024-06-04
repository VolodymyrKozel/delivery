import { Text, Image } from "react-native";

import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/utils/spacer";
import {
  Title,
  Row,
  Info,
  Address,
  RestaurantCard,
  RestaurantCardCover,
} from "./RestaurantsInfo.styles";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingAsStars = (rating) => {
    return Array(Math.floor(rating))
      .fill()
      .map((_, i) => <SvgXml xml={star} width={20} height={20} key={i} />);
  };
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          {ratingAsStars(rating)}
          {isClosedTemporarily && (
            <Spacer size="medium" position="left">
              <Text style={{ color: "red", marginLeft: "auto" }}>
                CLOSED TEMPORARILY
              </Text>
            </Spacer>
          )}
          {isOpenNow && (
            <Spacer size="medium" position="left">
              <SvgXml xml={open} width={20} height={20} />
            </Spacer>
          )}
          <Spacer size="medium" position="left">
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Spacer>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
