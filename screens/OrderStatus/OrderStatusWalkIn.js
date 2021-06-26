import React, { useMemo }  from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    FlatList,
    Alert
} from "react-native";
import { useSelector } from "react-redux";

import { images } from "../../constants";
import { TopBar, ShopPanelWalkIn, OrderSummaryCard, TableComponent } from "../../components";
import { shopData } from "../../mock-data"

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

const OrderStatusWalkIn = ({ navigation, route }) => {
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


    const showAlert = () => {
        Alert.alert(
            "The order will be cancelled.",
            "Are you sure you want to cancel this order?",
            [
                {
                    text: "No",
                    onPress: () => {},
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {},
                    style: "destructive"
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <React.Fragment>
            <ImageBackground
                source={images.background}
                style={styles.container}
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6d0fbc"
                />
                {/* StatusBar */}
                <TopBar
                    headerText="Your Order"
                    onBackButtonPress={() => navigation.goBack()}
                    lavenderEnabled
                />
                {/* Shop Panel */}
                <ShopPanelWalkIn
                    photo={shopPhoto}
                    name={shopName}
                    address={shopAddress}
                    phone={shopPhone}
                    today={today}
                    orderNumber={selectedOrder.id}
                    token={selectedOrder.tokenNo}
                />
                {/* Table */}
                <TableComponent
                    data={selectedOrder.items}
                />

                {/* Order Summary */}
                <OrderSummaryCard
                    noItems={selectedOrder.items.length}
                    totalAmount={selectedOrder.totalAmount}
                    homeDev={false}
                    onButtonPress={showAlert}
                    confirmed={false}
                />

            </ImageBackground>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        opacity: 1,
    }
});

export default OrderStatusWalkIn;
