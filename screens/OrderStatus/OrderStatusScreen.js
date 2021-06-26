import React from "react";
import {
    StyleSheet,
    StatusBar,
    ImageBackground,
    View,
    Text,
    Image, FlatList
} from "react-native";
import {
    OrderCardHomeDelivery,
    OrderCardWalkIn,
    TopTabComponent,
    HeaderBar
} from "../../components";
import {images} from "../../constants";
import {useSelector} from "react-redux";

const OrderStatusScreen = ({navigation}) => {
    const orders = useSelector(state => state.order.orders);

    if (orders.length === 0) {
        return (
            <View style={{
                flex: 1
            }}>
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
                <HeaderBar
                    headerText={"Your Orders"}
                    onPress={() => {
                        navigation.navigate("SettingsFlow")
                    }}
                />
                <TopTabComponent
                    onNewPress={() => navigation.navigate("OrderNewFlow")}
                    onStatusPress={() => null}
                    onCreditPress={() => navigation.navigate("CreditHistoryFlow")}
                    activeTab="orderStatus"
                />
                <ImageBackground
                    source={images.background}
                    style={styles.emptyBackground}
                >
                    <Image
                        source={images.empty_order}
                        style={styles.illustration}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.subText}>
                            You do not have any active orders right now...
                        </Text>
                        <Text style={styles.mainText}>
                            Shop now to see orders here
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <HeaderBar
                headerText={"Your Orders"}
                onPress={() => {
                    navigation.navigate("Settings")
                }}
            />
            <TopTabComponent
                onNewPress={() => navigation.navigate("OrderNewFlow")}
                onStatusPress={() => null}
                onCreditPress={() => navigation.navigate("CreditHistoryFlow")}
                activeTab="orderStatus"
            />
            <ImageBackground
                source={images.background}
                style={styles.container}
            >
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => {
                        if (item.category === "homeDelivery") {
                            return <OrderCardHomeDelivery
                                status={item.status !== "not confirmed"}
                                onPress={() => {
                                    navigation.navigate("OrderStatusHomeDeliveryExpanded", {
                                        orderNo: item.id
                                    })
                                }}
                                timeReceived={item.readableDate}
                                orderNo={item.id}
                            />
                        } else {
                            return <OrderCardWalkIn
                                tokenNumber={item.tokenNo}
                                timeReceived={item.readableDate}
                                orderNo={item.id}
                                onPress={() => {
                                    navigation.navigate("OrderStatusWalkInExpanded", {
                                        orderNo: item.id
                                    })
                                }}
                            />
                        }
                    }}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 10,
        resizeMode: "cover",
        backgroundColor: "white"
    },
    emptyBackground: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'center'
    },
    illustration: {
        width: "100%",
        height: "60%",
        resizeMode: "cover",
    },
    textContainer: {
        width: "90%",
        alignItems: "center"
    },
    subText: {
        fontFamily: "Roboto_400Regular",
        color: "#8c24e3",
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    mainText: {
        fontFamily: "Roboto_700Bold",
        color: "#8c24e3",
        fontSize: 24,
        textAlign: 'center',
    }
});

export default OrderStatusScreen;
