import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import { icons, COLORS } from "../constants";

/**
 * @param {String} amount The string to show at amount payable
 * @param {Function} onPress The callback to call when we press the card
 */

const CreditCard = ({ amount, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Card style={styles.cardStyle}>
        <View style={styles.cardContainer}>
          <View style={styles.cardColumn1}>
            <View style={styles.shopNameContainer}>
              <Image
                source={icons.vegetables}
                style={styles.vegetableIconStyle}
              />
              <Text style={styles.shopNameTextStyle}>Shop Name</Text>
            </View>
            <Text style={styles.shopAddressTextStyle}>
              Custom Address Lorem Ipsum, generic address
            </Text>
            <View style={styles.phoneViewStyle}>
              <Image source={icons.phone} style={styles.phoneIconStyle} />
              <Text style={styles.phoneTextStyle}>989XXXXXXX</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.subHeaderTextStyle}>Amount Payable:</Text>
            <Text style={styles.timeTextStyle}>{`₹ ${amount}`}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  cardStyle: {
    width: "100%",
    elevation: 0,
    borderWidth: 0.5,
    borderColor: "#CCC",
    marginTop: -2.5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 2,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  cardColumn1: {
    flex: 1,
  },
  shopNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  vegetableIconStyle: {
    width: 22,
    height: 22,
    resizeMode: "cover",
    marginRight: 5,
  },
  shopNameTextStyle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1d1d1d",
  },
  shopAddressTextStyle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
    color: "#1d1d1d",
    width: "70%",
    marginBottom: 10,
  },
  phoneViewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneIconStyle: {
    height: 15,
    width: 15,
    tintColor: "#555",
    resizeMode: "contain",
    marginRight: 5,
  },
  phoneTextStyle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 15,
    color: "#555",
  },
  subHeaderTextStyle: {
    fontFamily: "Roboto_400Regular",
    color: "#555",
    fontSize: 12,
  },
  timeTextStyle: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 5,
  },
});

export default CreditCard;
