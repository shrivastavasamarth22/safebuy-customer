import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { images, icons, COLORS } from "../constants";
import { TopTabComponent } from "../components";

const OrderNew = ({ navigation }) => {

    return (
        <ImageBackground
            source={images.background}
            style={styles.backgroundImage}
        >
            <StatusBar barStyle="light-content" backgroundColor="#6d0fbc" />
            <TopTabComponent
                onNewPress={() => null}
                onStatusPress={() => navigation.navigate("OrderStatusFlow")}
                onCreditPress={() => navigation.navigate("CreditHistoryFlow")}
                activeTab="orderNew"
            />
            <View style={styles.containerStyle}>
                <Image
                    source={icons.illustration}
                    style={styles.illustrationStyle}
                />
                <View style={{ marginTop: -40 }}>
                    <Text style={styles.headerMediumTextStyle}>
                        Looks like you do not have any nearby favorites...
                    </Text>
                    <Text style={styles.headerBoldTextStyle}>
                        TAP TO START SHOPPING
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate("Shop Category")}
            >
                <LinearGradient
                    colors={["#ab47ff", "#8c24e3"]}
                    style={styles.gradientStyle}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Image source={icons.add} style={styles.iconStyle} />
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    containerStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
    illustrationStyle: {
        height: 400,
        width: 1200,
    },
    headerMediumTextStyle: {
        fontFamily: "Roboto_400Regular",
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
        color: "#8c24e3",
    },
    headerBoldTextStyle: {
        fontFamily: "Roboto_700Bold",
        fontSize: 22,
        textAlign: "center",
        color: "#8c24e3",
    },
    buttonStyle: {
        position: "absolute",
        right: 30,
        bottom: 70,
    },
    gradientStyle: {
        width: 65,
        height: 65,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    iconStyle: {
        height: 50,
        width: 50,
    },
});

export default OrderNew;
