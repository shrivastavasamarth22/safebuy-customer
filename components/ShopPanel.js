import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import { icons, COLORS } from "../constants";

/**
 * @param {String} photo The location of the photo of the shop
 * @param {String} name The name of the shop
 * @param {String} address The address of the shop
 * @param {String} phone The phone number of the shop
 * @param {String} today The date
 * @param {String} orderNumber The order number
 */

const SCREEN_WIDTH = Dimensions.get("window").width;

const ShopPanel = ({ photo, name, address, phone, today, orderNumber }) => {
    return (
        <View style={styles.panelMainContainer}>
            <View style={styles.panelContainer}>
                <Image
                    source={photo}
                    resizeMode="cover"
                    style={styles.panelImageStyle}
                />
                <View
                    style={{
                        marginLeft: 15,
                    }}
                >
                    <Text style={styles.shopNameStyle}>{name}</Text>
                    <Text
                        style={{
                            width: "55%",
                            marginBottom: 5,
                            textAlign: "justify"
                        }}
                    >
                        {address}
                    </Text>
                    <View style={styles.panelContainer2}>
                        <Image
                            source={icons.phone}
                            resizeMode="contain"
                            style={styles.phoneIconStyle}
                        />
                        <Text style={styles.shopPhoneTextStyle}>{phone}</Text>
                    </View>
                </View>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
                {!!today ? (
                    <Text style={styles.dateTextStyle}>
                        {"Date : " + today}
                    </Text>
                ) : null}
                {!!orderNumber ? (
                    <Text style={styles.orderNumberTextStyle}>
                        {"Invoice No. " + orderNumber}
                    </Text>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    panelMainContainer: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    panelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    panelImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    shopNameStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        color: COLORS.primary,
    },
    panelContainer2: {
        flexDirection: "row",
        alignItems: "center",
    },
    phoneIconStyle: {
        height: 15,
        width: 15,
        marginRight: 10,
        tintColor: "#000"
    },
    shopPhoneTextStyle: {
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        marginLeft: -2,
    },
    dateTextStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 15,
        color: "#111",
    },
    orderNumberTextStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 15,
        color: "#111",
    },
});

export default ShopPanel;
