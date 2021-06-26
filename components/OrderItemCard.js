import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import QuantityCounter from "./QuantityCounter";

const { SCREEN_WIDTH } = Dimensions.get("window");

/**
 * @param {OrderItem|Item} item The actual item/product to render in the card
 * @param {number} quantity The quantity of the item in the bag
 * @param {Function} onAdd The callback to call when we're increasing the quantity
 * @param {Function} onRemove The callback to call when we're decreasing the quantity
 * @returns 
 */
export default function OrderItemCard({ item, onAdd, onRemove, quantity }) {
  return (
    <Card style={styles.cardStyle}>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.itemHindiNameTextStyle}>{item.hindiName}</Text>
        <Image
          source={item.image}
          resizeMode="center"
          style={styles.imageStyle}
        />
        <LinearGradient
          colors={[
            COLORS.fromPrimaryGradientColor,
            COLORS.toPrimaryGradientColor,
          ]}
          style={styles.gradientStyle}
        >
          <Text style={styles.itemRateTextStyle}>
            ₹ {item.pricePerUnitToPrint}
          </Text>
        </LinearGradient>
      </View>
      <View style={styles.counterContainerStyle}>
        <Text style={styles.itemNameTextStyle}>{item.name}</Text>
        <QuantityCounter
          quantity={`${quantity} ${item.unit}`}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <Text style={styles.quantityTextStyle}>Quantity Bought</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: SCREEN_WIDTH,
    marginBottom: 15,
    elevation: 5,
  },
  cardContainerStyle: {
    alignItems: "center",
    flex: 1.3,
    paddingTop: 10,
    borderTopRightRadius: 5,
  },
  itemHindiNameTextStyle: {
    fontSize: 18,
    fontFamily: 'yantramanav_medium',
  },
  imageStyle: {
    width: 100,
    height: 90,
  },
  gradientStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 30,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 5
  },
  itemRateTextStyle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "white",
  },
  counterContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
  itemNameTextStyle: {
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
    color: COLORS.grey,
    marginBottom: 7,
  },
});