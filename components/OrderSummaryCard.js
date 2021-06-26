import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * @param {number} noItems The number of items in the order
 * @param {number} totalAmount The total amount of the order
 * @param {boolean} homeDev Whether the order is home delivery or walk in
 * @param {boolean} confirmed Whether the order is confirmed or not
 * @param {func} onButtonPress The callback to call when we press the cancel button
 * */

const OrderSummaryCard = ({noItems, totalAmount, homeDev, onButtonPress, confirmed}) => {
    return(
        <View style={{
            backgroundColor: "white",
        }}>
            <View style={styles.barContainer}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={styles.summaryTextStyle}>
                        Total Items :
                    </Text>
                    <Text style={styles.summaryTextStyle}>
                        Total Amount :
                    </Text>
                    {homeDev ? <Text style={styles.summaryTextStyle}>
                        Home Delivery Charge :
                    </Text> : null}
                    <Text style={styles.summaryTextStyle}>
                        Gross Total :
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'flex-end'
                }}>
                    <Text style={styles.summaryTextStyle}>
                        {`0${noItems}`}
                    </Text>
                    <Text style={styles.summaryTextStyle}>
                        {`₹ ${totalAmount}`}
                    </Text>
                    {homeDev ? <Text style={styles.summaryTextStyle}>
                        ₹ 40
                    </Text> : null}
                    <Text style={styles.summaryTextStyle}>
                        {homeDev ? `₹ ${totalAmount + 40}` : `₹ ${totalAmount + 40}`}
                    </Text>
                </View>
            </View>
            {confirmed ? null : <TouchableOpacity onPress={onButtonPress}>
                <Text style={styles.textButton}>Cancel Order</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    summaryTextStyle: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: "Roboto_500Medium",
        color: "#262626",
    },
    textButton: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "red",
        alignSelf: "center",
        marginBottom: 10,
    },
})

export default OrderSummaryCard