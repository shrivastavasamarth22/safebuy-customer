import React, {useMemo} from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity, FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import call from 'react-native-phone-call'
import { COLORS, images, icons } from "../../constants";

import {TopBar, ShopPanel, TableComponent} from "../../components";
import {useSelector} from "react-redux";
import {shopData} from "../../mock-data";

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
    const { orderNo } = route.params
    const orders = useSelector(state => state.order.orders);
    const selectedOrder = orders.find(o => o.id === orderNo);

    const { shopName, shopPhone, shopAddress, shopPhoto } = useMemo(() => {
        const shop = shopData.find((s) => s.id === selectedOrder.shopId);
        const shopName = (shop && shop.name) || "N/A";
        const shopPhone = (shop && shop.phone) || "N/A";
        const shopAddress = (shop && shop.address) || "N/A";
        const shopPhoto = (shop && shop.photo) || undefined

        return { shopName, shopPhone, shopAddress, shopPhoto }
    }, [shopData, selectedOrder.shopId])

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
                    photo={shopPhoto}
                    name={shopName}
                    address={shopAddress}
                    phone={shopPhone}
                    today={today}
                    orderNumber={selectedOrder.id}
                />
                {/* Table */}
                <TableComponent
                    data={selectedOrder.items}
                />

                {/* Final Summary */}
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
                        <Text style={styles.summaryTextStyle}>
                            Home Delivery Charge :
                        </Text>
                        <Text style={styles.summaryTextStyle}>
                            Gross Total :
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        alignItems: 'flex-end'
                    }}>
                        <Text style={styles.summaryTextStyle}>
                            {`0${selectedOrder.items.length}`}
                        </Text>
                        <Text style={styles.summaryTextStyle}>
                            {`₹ ${selectedOrder.totalAmount}`}
                        </Text>
                        <Text style={styles.summaryTextStyle}>
                            ₹ 40
                        </Text>
                        <Text style={styles.summaryTextStyle}>
                            {`₹ ${selectedOrder.totalAmount + 40}`}
                        </Text>
                    </View>
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
        flex: 1
    },
    tableHeader: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    tableHeaderText: {
        fontSize: 16,
        color: "black",
        fontFamily: "Roboto_500Medium",
    },
    tableList: {
        marginBottom: 5,
        paddingVertical: 2,
        backgroundColor: "white",
        borderTopColor: "#eee",
        borderBottomColor: "#eee",
        borderWidth: 0.5
    },
    tableListItemRow: {
        flexDirection: "row",
        paddingHorizontal: 5,
    },
    tableColumnText: {
        fontSize: 13,
        fontFamily: "Roboto_700Bold",
        textAlign: "center",
        color: "#262626",
    },
    tableColumn: {
        width: "100%",
        justifyContent: "center",
    },
    barContainer: {
        alignSelf: "flex-end",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: "white"
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
