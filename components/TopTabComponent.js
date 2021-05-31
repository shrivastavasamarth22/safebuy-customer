import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * 
 * @param {Function} onNewPress The callback to call when we press the Order New Button
 * @param {Function} onStatusPress The callback to call when we press the Order Status Button
 * @param {Function} onCreditPress The callback to call when we press the Credit History Button
 * @param {String} activeTab The name of the active tab
 */

const TopTabComponent = ({ onNewPress, onStatusPress, onCreditPress, activeTab }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.pressableStyle} onPress={onNewPress}>
                <View style={styles.pressableContainer}>
                    <Text style={activeTab == "orderNew" ? (styles.activeText) : (styles.inactiveText)}>Order New</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pressableStyle} onPress={onStatusPress}>
                <View style={styles.pressableContainer}>
                    <Text style={activeTab == "orderStatus" ? (styles.activeText) : (styles.inactiveText)}>Order Status</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pressableStyle} onPress={onCreditPress}>
                <View style={styles.pressableContainer}>
                    <Text style={activeTab == "creditHistory" ? (styles.activeText) : (styles.inactiveText)}>Credit History</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        backgroundColor: "#8c24e3",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        elevation: 10
    },
    pressableStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    activeText: {
        color: "white",
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
    pressableContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8c24e3",
        height: "100%",
        width: "100%",
    },
    inactiveText: {
        color: "#331052",
        fontSize: 15,
        fontFamily: "Roboto_500Medium",
    }
});

export default TopTabComponent;
