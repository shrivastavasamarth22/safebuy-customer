import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { icons, COLORS } from "../constants";

/**
 * @param {String} quantity A quantity string that also includes the unit
 * @param {Function} onAdd The callback to call when we're increasing the quantity
 * @param {Function} onRemove The callback to call when we're decreasing the quantity
 * @returns
 */
export default function QuantityCounter({ quantity, onAdd, onRemove }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRemove}>
        <View style={styles.counterBoxLeft}>
          <Image
            source={icons.subtract}
            resizeMode="contain"
            style={styles.subtractIconStyle}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.boxStyle}>
        <Text style={styles.quantityTextStyle}>
          {quantity}
        </Text>
      </View>
      <TouchableOpacity onPress={onAdd}>
        <View style={styles.counterBoxRight}>
          <Image
            source={icons.add}
            resizeMode="contain"
            style={styles.addIconStyle}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  counterBoxLeft: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    backgroundColor: "#EB6D6D",
    borderRadius: 2,
    marginRight: 5,
  },
  subtractIconStyle: {
    height: 25,
    width: 25,
  },
  boxStyle: {
    width: 100,
    height: 35,
    borderColor: "rgba(232, 232, 235, 1)",
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  quantityTextStyle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
  counterBoxRight: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginLeft: 5,
  },
  addIconStyle: {
    height: 40,
    width: 40,
  },
});
