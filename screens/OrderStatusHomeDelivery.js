import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-shadow-cards";
import { Overlay } from "react-native-elements";

import { COLORS, images } from "../constants";
import { TopBar, ShopPanel } from "../components";

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = "0" + dd;
}

if (mm < 10) {
    mm = "0" + mm;
}

today = dd + "-" + mm + "-" + yyyy;

const OrderStatusHomeDelivery = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    const onCancelPress = () => {
        toggleVisible();
    };

    const onYesPress = () => {
        toggleVisible();
        navigation.navigate("Order Status")
    }

    return (
        <React.Fragment>
            <ImageBackground
                source={images.background}
                style={styles.container}
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLORS.darkGreen}
                />
                {/* StatusBar */}
                <TopBar
                    headerText="Your Order"
                    onBackButtonPress={() => navigation.goBack()}
                />
                {/* Shop Panel */}
                <ShopPanel
                    photo={images.gupta}
                    name="Shop Name"
                    address="Custom Address Lorem Ipsum, generic address"
                    phone="989XXXXXXX"
                    today={today}
                    orderNumber="YYYYMMDD00X"
                />
                {/* Table */}
                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <View
                            style={[
                                styles.tableColumn,
                                { flex: 1, alignItems: "center" },
                            ]}
                        >
                            <Text style={styles.tableHeaderText}>S.No</Text>
                        </View>
                        <View
                            style={[
                                styles.tableColumn,
                                { flex: 3, alignItems: "center" },
                            ]}
                        >
                            <Text style={styles.tableHeaderText}>Name</Text>
                        </View>
                        <View
                            style={[
                                styles.tableColumn,
                                { flex: 2, alignItems: "center" },
                            ]}
                        >
                            <Text style={styles.tableHeaderText}>Rate</Text>
                        </View>
                        <View
                            style={[
                                styles.tableColumn,
                                { flex: 2, alignItems: "center" },
                            ]}
                        >
                            <Text style={styles.tableHeaderText}>Qty</Text>
                        </View>
                        <View
                            style={[
                                styles.tableColumn,
                                { flex: 2, alignItems: "center" },
                            ]}
                        >
                            <Text style={styles.tableHeaderText}>Price</Text>
                        </View>
                    </View>

                    <LinearGradient
                        style={styles.tableListGradient}
                        colors={[
                            COLORS.fromPrimaryGradientColor,
                            COLORS.toPrimaryGradientColor,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View style={styles.tableListItemRow}>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 1, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    01
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 3, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    Apple Washington
                                </Text>
                                <Text style={styles.tableColumnTextGradient}>
                                    ( सेब )
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    ₹ 120/KG
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    5 KG
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    ₹ 100/-
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>

                    <View style={styles.tableList}>
                        <View style={styles.tableListItemRow}>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 1, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnText}>02</Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 3, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnText}>
                                    Apple Washington
                                </Text>
                                <Text style={styles.tableColumnText}>
                                    ( सेब )
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnText}>
                                    ₹ 120/KG
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnText}>5 KG</Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnText}>
                                    ₹ 100/-
                                </Text>
                            </View>
                        </View>
                    </View>

                    <LinearGradient
                        style={styles.tableListGradient}
                        colors={[
                            COLORS.fromPrimaryGradientColor,
                            COLORS.toPrimaryGradientColor,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <View style={styles.tableListItemRow}>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 1, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    03
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 3, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    Apple Washington
                                </Text>
                                <Text style={styles.tableColumnTextGradient}>
                                    ( सेब )
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    ₹ 120/KG
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    5 KG
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.tableColumn,
                                    { flex: 2, alignItems: "center" },
                                ]}
                            >
                                <Text style={styles.tableColumnTextGradient}>
                                    ₹ 100/-
                                </Text>
                            </View>
                        </View>
                    </LinearGradient>
                </View>

                {/*  */}
                <View style={styles.barContainer}>
                    <LinearGradient
                        colors={[
                            COLORS.fromPrimaryGradientColor,
                            COLORS.toPrimaryGradientColor,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.barStyle}
                    >
                        <Text style={styles.gradientBarTextStyle}>
                            GROSS TOTAL
                        </Text>
                        <Text style={styles.gradientBarTextStyle}>₹ 340</Text>
                    </LinearGradient>
                    <View style={styles.barStyle}>
                        <Text style={styles.barTextStyle}>
                            Home Delivery Charge:
                        </Text>
                        <Text style={styles.barTextStyle}>₹ 40</Text>
                    </View>
                    <LinearGradient
                        colors={[
                            COLORS.fromPrimaryGradientColor,
                            COLORS.toPrimaryGradientColor,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.barStyle}
                    >
                        <Text style={styles.gradientBarTextStyle}>TOTAL</Text>
                        <Text style={styles.gradientBarTextStyle}>₹ 300</Text>
                    </LinearGradient>
                </View>

                <TouchableOpacity onPress={onCancelPress}>
                    <Text style={styles.textButton}>Cancel Order</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleVisible}
                overlayStyle={{
                    padding: 0
                }}
            >
                <Card style={{
                    paddingTop: 10,
                    paddingBottom: 30,
                    paddingHorizontal: 12,
                }}>
                    <Text style={{
                        fontFamily: "Roboto_500Medium",
                        fontSize: 18,
                        color: COLORS.orange,
                        alignSelf: "center",
                        marginBottom: 20,
                        textAlign: "center"
                    }}>
                        Do you really want to cancel this order?
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}>
                        <TouchableOpacity 
                        onPress={toggleVisible}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 10,
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: COLORS.orange,
                            width: 160
                        }}>
                            <Text style={{
                                fontFamily: "Roboto_500Medium",
                                fontSize: 20,
                                color: COLORS.orange
                            }}>
                                No
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={onYesPress}
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 10,
                            backgroundColor: COLORS.orange,
                            borderRadius: 5,
                            width: 160
                        }}>
                            <Text style={{
                                fontFamily: "Roboto_500Medium",
                                fontSize: 20,
                                color: "white"
                            }}>
                                Yes
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </Overlay>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        opacity: 1,
    },
    tableContainer: {
        width: "100%",
    },
    tableHeader: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    tableHeaderText: {
        fontSize: 16,
        color: COLORS.primary,
        fontFamily: "Roboto_500Medium",
    },
    tableList: {
        marginBottom: 5,
        paddingVertical: 5,
    },
    tableListItemRow: {
        flexDirection: "row",
        paddingHorizontal: 5,
    },
    tableColumnText: {
        fontSize: 12,
        fontFamily: "Roboto_700Bold",
        textAlign: "center",
        color: COLORS.darkGreen,
    },
    tableColumn: {
        width: "100%",
        justifyContent: "center",
    },
    tableListGradient: {
        marginBottom: 5,
        paddingVertical: 10,
    },
    tableColumnTextGradient: {
        fontSize: 12,
        fontFamily: "Roboto_700Bold",
        textAlign: "center",
        color: "white",
    },
    barStyle: {
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    gradientBarTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    boxStyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "#CCC",
        alignItems: "center",
        justifyContent: "center",
    },
    barTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: COLORS.darkGreen,
    },
    barContainer: {
        flex: 1,
        flexDirection: "column-reverse",
        marginBottom: 20,
    },
    textButton: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "red",
        alignSelf: "center",
        marginBottom: 20,
    },
});

export default OrderStatusHomeDelivery;
