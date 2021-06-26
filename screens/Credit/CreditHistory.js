import React from "react";
import { StyleSheet, StatusBar, ImageBackground, View } from "react-native";

import { images } from "../../constants";
import {CreditCard, HeaderBar, TopTabComponent} from "../../components";

const CreditHistory = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <HeaderBar
                headerText={"Credit History"}
                onPress={() => {
                    navigation.navigate("SettingsFlow")
                }}
            />
            <TopTabComponent
                onNewPress={() => navigation.navigate("OrderNewFlow")}
                onStatusPress={() => navigation.navigate("OrderStatusFlow")}
                onCreditPress={() => null}
                activeTab="creditHistory"
            />
            <ImageBackground
                source={images.background}
                style={styles.container}
            >
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc" />
                <CreditCard
                    amount="1255"
                    onPress={() => navigation.navigate("Credit Summary")}
                />
                <CreditCard
                    amount="345"
                    onPress={() => navigation.navigate("Credit Summary")}
                />
                <CreditCard
                    amount="890"
                    onPress={() => navigation.navigate("Credit Summary")}
                />
                <CreditCard
                    amount="50"
                    onPress={() => navigation.navigate("Credit Summary")}
                />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingTop: 20,
        resizeMode: "cover",
    },
});

export default CreditHistory;
