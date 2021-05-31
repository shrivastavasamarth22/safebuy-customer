import React from "react";
import {
    StyleSheet,
    StatusBar,
    ImageBackground,
    ScrollView,
    View,
} from "react-native";
import {
    OrderCardHomeDelivery,
    OrderCardWalkIn,
    TopTabComponent,
} from "../components";
import { images } from "../constants";

const OrderStatusScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#6d0fbc"
                    />
                    <OrderCardHomeDelivery
                        status
                        onPress={() =>
                            navigation.navigate("OrderStatusExpandedConfirmed")
                        }
                    />
                    <OrderCardWalkIn tokenNumber="005" />
                    <OrderCardHomeDelivery
                        onPress={() =>
                            navigation.navigate("OrderStatusExpanded")
                        }
                    />
                    <OrderCardWalkIn tokenNumber="010" />
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 10,
        resizeMode: "cover",
    },
});

export default OrderStatusScreen;
