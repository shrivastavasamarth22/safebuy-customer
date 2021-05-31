import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-shadow-cards";
import { icons, COLORS, images } from "../constants";

/**
 * @param {Boolean} status The status of the order
 * @param {Function} onPress The callback to call when we press the card
 */

const OrderCardHomeDelivery = ({ status, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.bannerStyle}>
                    <Image
                        source={icons.map_marker}
                        style={styles.markerIconStyle}
                    />
                    <Text style={styles.bannerTextStyle}>Home Delivery</Text>
                </View>
                <Card style={styles.cardStyle}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardColumn1}>
                            <View style={styles.shopNameContainer}>
                                <Image
                                    source={icons.vegetables}
                                    style={styles.vegetableIconStyle}
                                />
                                <Text style={styles.shopNameTextStyle}>
                                    Shop Name
                                </Text>
                            </View>
                            <Text style={styles.shopAddressTextStyle}>
                                Custom Address Lorem Ipsum, generic address
                            </Text>
                            <View style={styles.phoneViewStyle}>
                                <Image
                                    source={icons.phone}
                                    style={styles.phoneIconStyle}
                                />
                                <Text style={styles.phoneTextStyle}>
                                    989XXXXXXX
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={styles.subHeaderTextStyle}>
                                Received at:
                            </Text>
                            <Text style={styles.timeTextStyle}>12:55 PM</Text>
                            <Text style={styles.subHeaderTextStyle}>
                                Order No.
                            </Text>
                            <Text style={styles.orderNumberTextStyle}>
                                YYYYMMDD00X
                            </Text>
                            <Text style={styles.subHeaderTextStyle}>
                                Status:
                            </Text>
                            <Text
                                style={[
                                    styles.statusTextStyle,
                                    { color: status ? COLORS.primary : "red" },
                                ]}
                            >
                                {status ? "In-Transit" : "Not Confirmed"}
                            </Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    bannerStyle: {
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        backgroundColor: COLORS.orange,
        flexDirection: "row",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: 150,
        paddingTop: 5,
        paddingBottom: 8
    },
    markerIconStyle: {
        width: 21,
        height: 21,
        tintColor: "white",
        resizeMode: "cover",
        marginRight: 5
    },
    bannerTextStyle: {
        color: "white",
        fontFamily: "Roboto_500Medium",
        fontSize: 14,
    },
    cardStyle: {
        width: "100%",
        elevation: 0,
        borderWidth: 0.5,
        borderColor: "#CCC",
        marginTop: -2.5,
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
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
        color: "#1d1d1d",
        marginBottom: 5,
    },
    orderNumberTextStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: COLORS.primary,
        marginBottom: 5,
    },
    statusTextStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
    },
});

export default OrderCardHomeDelivery;
