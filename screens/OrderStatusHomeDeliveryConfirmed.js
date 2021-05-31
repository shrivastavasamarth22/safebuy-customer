import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import call from 'react-native-phone-call'
import { COLORS, images, icons } from "../constants";

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

const callArgs = {
    number: '9893614220',
    prompt: true
}

const OrderStatusHomeDeliveryConfirmed = ({ navigation }) => {
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

                {/* Final Summary */}
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
                            GRAND TOTAL
                        </Text>
                        <Text style={styles.gradientBarTextStyle}>₹ 280</Text>
                    </LinearGradient>
                    <View style={styles.barStyle}>
                        <Text style={styles.barTextStyle}>
                            Discount Received:
                        </Text>
                        <View style={styles.boxStyle}>
                            <Text style={styles.barTextStyle}>₹ 20</Text>
                        </View>
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
            </ImageBackground>

            {/* Info Panel */}
            <View style={styles.delInfoPanelContainer}>
                <View style={styles.delInfoPanelSection}>
                    <Image
                        source={icons.avatar}
                        style={styles.avatarIconStyle}
                    />
                    <View
                        style={{
                            alignItems: "center",
                        }}
                    >
                        <Text style={styles.nameTextStyle}>Mukesh Singh</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={icons.phone}
                                style={{
                                    width: 12,
                                    height: 12,
                                    marginRight: 5
                                }}
                            />
                            <Text style={[styles.nameTextStyle, { fontSize: 14 }]}>989XXXXXXX</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.callButtonStyle}
                    onPress={async () => call(callArgs).catch(console.error)}
                >
                    <Text style={[styles.nameTextStyle, { color: "white", fontSize: 18 }]}>Call</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
        color: COLORS.darkGreen,
    },
    barContainer: {
        flex: 1,
        flexDirection: "column-reverse",
        marginBottom: 10,
    },
    delInfoPanelContainer: {
        alignSelf: "flex-end",
        width: "100%",
        height: 100,
        backgroundColor: "white",
        elevation: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        justifyContent: "space-between",
    },
    delInfoPanelSection: { 
        flexDirection: "row", 
        alignItems: "center" 
    },
    avatarIconStyle: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginRight: 10,
    },
    nameTextStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
        color: "#555"
    },
    callButtonStyle: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#2fe38f",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default OrderStatusHomeDeliveryConfirmed;
