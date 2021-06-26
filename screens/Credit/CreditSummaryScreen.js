import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, images } from "../../constants";
import { TopBar, ShopPanel } from "../../components";

const CreditSummaryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopBar
                headerText="Credit History"
                onBackButtonPress={() => navigation.goBack()}
                lavenderEnabled
            />
            <ShopPanel
                photo={images.gupta}
                name="Shop Name"
                address="Custom Address Lorem Ipsum, generic address"
                phone="989XXXXXXX"
            />
            <View style={styles.valueContainer}>
                <Text style={styles.dateStyle}>10th Oct, Tuesday</Text>
                <View
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <Text style={styles.subHeaderTextStyle}>Order No.</Text>
                    <Text style={styles.valueTextStyle}>YYYYMMDD00X</Text>
                    <Text style={styles.subHeaderTextStyle}>
                        Amount Payable:
                    </Text>
                    <Text style={styles.valueTextStyle}>₹ ABC</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.valueContainer}>
                <Text style={styles.dateStyle}>9th Oct, Monday</Text>
                <View
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <Text style={styles.subHeaderTextStyle}>Order No.</Text>
                    <Text style={styles.valueTextStyle}>YYYYMMDD00X</Text>
                    <Text style={styles.subHeaderTextStyle}>
                        Amount Payable:
                    </Text>
                    <Text style={styles.valueTextStyle}>₹ ABC</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.valueContainer}>
                <Text style={styles.dateStyle}>8th Oct, Sunday</Text>
                <View
                    style={{
                        alignItems: "flex-end",
                    }}
                >
                    <Text style={styles.subHeaderTextStyle}>Order No.</Text>
                    <Text style={styles.valueTextStyle}>YYYYMMDD00X</Text>
                    <Text style={styles.subHeaderTextStyle}>
                        Amount Payable:
                    </Text>
                    <Text style={styles.valueTextStyle}>₹ ABC</Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.totalAmountContainerStyle}>
                <Text style={styles.totalAmountTextStyle}>
                    Total Amount Due: ₹ ABC
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 15,
    },
    dateStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "#333",
    },
    subHeaderTextStyle: {
        fontFamily: "Roboto_400Regular",
        color: "#555",
        fontSize: 12,
    },
    valueTextStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: COLORS.primary,
        marginBottom: 5,
    },
    divider: {
        width: "100%",
        backgroundColor: "#CCC",
        height: 1,
        marginTop: 5,
        marginBottom: 10,
    },
    totalAmountContainerStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        bottom: 50,
        padding: 20,
        borderWidth: 4,
        borderStyle: "dashed",
        borderColor: COLORS.darkGreen,
        borderRadius: 10,
    },
    totalAmountTextStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        color: COLORS.darkGreen,
    },
});

export default CreditSummaryScreen;
