import React, {useMemo} from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ImageBackground,
    FlatList,
    Alert
} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {COLORS, images} from "../../constants";
import {TopBar, ShopPanel, OrderSummaryCard, TableComponent} from "../../components";
import {shopData} from "../../mock-data"
import {Tab} from "react-native-elements";
import * as orderActions from '../../store/actions/order'

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

const OrderStatusHomeDelivery = ({navigation, route}) => {
    const {orderNo} = route.params
    const orders = useSelector(state => state.order.orders);
    const selectedOrder = orders.find(o => o.id === orderNo);
    const dispatch = useDispatch();

    const {shopName, shopPhone, shopAddress, shopPhoto} = useMemo(() => {
        const shop =selectedOrder ? shopData.find((s) => s.id === selectedOrder.shopId) : undefined
        const shopName = (shop && shop.name) || "N/A";
        const shopPhone = (shop && shop.phone) || "N/A";
        const shopAddress = (shop && shop.address) || "N/A";
        const shopPhoto = (shop && shop.photo) || undefined

        return {shopName, shopPhone, shopAddress, shopPhoto}
    }, [shopData, selectedOrder && selectedOrder.shopId])


    const showAlert = () => {
        Alert.alert(
            "The order will be cancelled.",
            "Are you sure you want to cancel this order?",
            [
                {
                    text: "No",
                    onPress: () => {
                    },
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        navigation.goBack();
                        dispatch(orderActions.deleteOrder(orderNo))
                    },
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
                    backgroundColor={COLORS.darkGreen}
                />
                {/* StatusBar */}
                <TopBar
                    headerText="Your Order"
                    onBackButtonPress={() => navigation.goBack()}
                />

                {
                    !!selectedOrder && (
                        <>
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

                            {/* Order Summary */}
                            <OrderSummaryCard
                                noItems={selectedOrder.items.length}
                                totalAmount={selectedOrder.totalAmount}
                                homeDev
                                confirmed={false}
                                onButtonPress={showAlert}
                            />
                        </>
                    )
                }

            </ImageBackground>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        opacity: 1,
    },
});

export default OrderStatusHomeDelivery;
