import React from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    ImageBackground, FlatList,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useSelector, useDispatch} from "react-redux";

import {shopData} from "../../mock-data";
import {images, icons} from "../../constants";
import {TopTabComponent, FavoriteCard, HeaderBar} from "../../components";

import * as favoriteActions from '../../store/actions/favorites'

const OrderNew = ({navigation}) => {

    const favoritesList = useSelector(state => state.favorites.favorites);
    const shops = shopData.filter(shop => favoritesList.includes(shop.id));

    const dispatch = useDispatch();

    if (shops.length === 0) {
        return (
            <ImageBackground
                source={images.background}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
                <HeaderBar headerText={"Shop Now"} onPress={() => {
                    navigation.navigate("SettingsFlow")
                }}/>
                <TopTabComponent
                    onNewPress={() => null}
                    onStatusPress={() => navigation.navigate("OrderStatusFlow")}
                    onCreditPress={() => navigation.navigate("CreditHistoryFlow")}
                    activeTab="orderNew"
                />
                <View pointerEvents={"none"} style={{width: "100%", height: "60%"}}>
                    <Image
                        source={icons.illustration}
                        style={styles.illustrationStyle}
                    />
                </View>
                <View style={{marginTop: -40}}>
                    <Text style={styles.headerMediumTextStyle}>
                        Looks like you do not have any nearby favorites...
                    </Text>
                    <Text style={styles.headerBoldTextStyle}>
                        TAP TO START SHOPPING
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate("Shop Category")}
                >
                    <LinearGradient
                        colors={["#8c24e3", "#6d0fbc"]}
                        style={styles.gradientStyle}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                    >
                        <Image source={icons.add} style={styles.iconStyle}/>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        );
    } else {
        return (
            <ImageBackground
                source={images.background}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
                <HeaderBar
                    headerText={"Shop Now"}
                    onPress={() => {
                        navigation.navigate("Settings")
                    }}
                />
                <TopTabComponent
                    onNewPress={() => null}
                    onStatusPress={() => navigation.navigate("OrderStatusFlow")}
                    onCreditPress={() => navigation.navigate("CreditHistoryFlow")}
                    activeTab="orderNew"
                />
                <LinearGradient
                    colors={["#ab47ff", "#8c24e3"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.titleGradientStyle}
                >
                    <Text style={styles.titleTextStyle}>
                        Your Favorites :
                    </Text>
                </LinearGradient>
                <FlatList
                    data={shops}
                    contentContainerStyle={{
                        width: "100%",
                        paddingHorizontal: 5
                    }}
                    keyExtractor={shop => shop.id.toString()}
                    renderItem={({item}) => {
                        return (
                            <FavoriteCard
                                shop={item}
                                style={styles.favoriteCardStyle}
                                onCardPress={() => navigation.navigate("Vegetable List", {
                                    id: item.id,
                                })}
                                onRemovePress={() => dispatch(favoriteActions.removeFromFavorites(item.id))}
                            />
                        )
                    }}/>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Shop Category")}
                >
                    <LinearGradient
                        colors={["#ab47ff", "#8c24e3"]}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.buttonGradientStyle}
                    >
                        <Text style={styles.buttonTextStyle}>
                            Shop More
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: "white"
    },
    containerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    illustrationStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        marginTop: -50
    },
    headerMediumTextStyle: {
        fontFamily: "Roboto_400Regular",
        fontSize: 18,
        marginTop: -20,
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
    titleTextStyle: {
        marginLeft: 12,
        fontFamily: "Roboto_700Bold",
        fontSize: 22,
        color: "white"
    },
    titleGradientStyle: {
        width: "100%",
        paddingVertical: 10,
        marginBottom: 10
    },
    favoriteCardStyle: {
        marginBottom: 20
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 12,
        marginBottom: 15
    },
    buttonGradientStyle: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "white",
    }
});

export default OrderNew;
