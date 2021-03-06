import React, { useState, useRef, useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar,
    TouchableWithoutFeedback,
    ImageBackground
} from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import { Card } from "react-native-shadow-cards";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";

import { icons, COLORS, images } from "../../constants";
import { shopData } from "../../mock-data";
import { TopBar } from "../../components";
import { ShopPanel } from "../../components";
import * as bagActions from '../../store/actions/bag';
import * as orderActions from '../../store/actions/order'


const OrderSummaryScreen = ({ navigation, route }) => {
    const { shopId } = route.params;
    const [visible, setVisible] = useState(false);
    const bottomSheetRef = useRef(null);

    const bagTotalAmount = useSelector(state => state.bag.totalAmount);
    const bagItems = useSelector(state => {
        const transformedBagItems = [];
        for (const key in state.bag.items) {
            const item = state.bag.items[key];
            transformedBagItems.push({
                itemId: key,
                name: item.name,
                hindiName: item.hindiName,
                image: item.image,
                category: item.category,
                pricePerUnitToPrint: item.pricePerUnitToPrint,
                unit: item.unit,
                increment: item.increment,
                multiplier: item.multiplier,
                qty: item.qty,
                sum: item.sum
            })
        }
        return transformedBagItems;
    })

    const dispatch = useDispatch();

    const selectedShop = useMemo(() => {
        return shopData.find((shop) => shop.id === shopId);
    }, [shopData, shopId]);

    const onShowBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(1);
            toggleOverlay();
        }
    };

    const onCloseBottomSheet = () => {
        if (bottomSheetRef.current) {
            bottomSheetRef.current.snapTo(0);
            toggleOverlay();
        }
    };

    const toggleOverlay = () => {
        setVisible(!visible);
    };

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

    const editOrder = (action, product) => {
        if (action === "+") {
            dispatch(bagActions.addToBag(product))
        } else {
            dispatch(bagActions.removeFromBag(product.itemId))
        }
    }

    const renderCounter = (item) => {
        return (
            <View style={styles.counterMainContainer}>
                <TouchableOpacity
                    onPress={() => editOrder("-", item)}
                >
                    <View style={styles.counterContainer1}>
                        <Image
                            source={icons.subtract}
                            resizeMode="contain"
                            style={styles.subtractIconStyle}
                        />
                    </View>
                </TouchableOpacity>
                <View style={styles.counterQuantityBoxStyle}>
                    <Text style={styles.counterQuantityTextStyle}>
                        {item.qty + " " + item.unit}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => editOrder("+", item)}
                >
                    <View style={styles.counterContainer2}>
                        <Image
                            source={icons.add}
                            resizeMode="contain"
                            style={styles.addIconStyle}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    if (bagItems.length === 0) {
        navigation.goBack();
    }

    const renderInner = () => {
        return (
            <ImageBackground source={images.background} style={styles.bottomSheetContentContainer}>
                <View
                    style={styles.sheetHeaderContainer}
                >
                    <Text
                        style={styles.sheetHeaderText}
                    >
                        Select Pickup Option:
                    </Text>
                    <TouchableOpacity onPress={onCloseBottomSheet} style={{
                        padding: 10,
                    }}>
                        <Image
                            source={icons.cancel}
                            style={styles.cancelIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.textContainer}
                >
                    <Text
                        style={styles.sheetTextStyle}
                    >
                        Total Items:
                    </Text>
                    <Text
                        style={styles.sheetTextStyle}
                    >
                        {`0${bagItems.length}`}
                    </Text>
                </View>
                <View
                    style={styles.textContainer}
                >
                    <Text
                        style={styles.sheetTextStyle}
                    >
                        Grand Total:
                    </Text>
                    <Text
                        style={styles.sheetTextStyle}
                    >
                        {`??? ${bagTotalAmount}`}
                    </Text>
                </View>
                <View style={styles.sheetButtonContainer}>
                    <TouchableOpacity style={styles.sheetButtonStyle} onPress={() => {
                        dispatch(orderActions.addOrder(bagItems, bagTotalAmount, "homeDelivery", shopId));
                        navigation.navigate("OrderStatusFlow")
                    }}>
                        <Image 
                            source={icons.map_marker}
                            style={styles.markerIconStyle}
                        />
                        <Text style={styles.sheetButtonTextStyle}>
                            Home Delivery
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sheetButtonStyle} onPress={() => {
                        dispatch(orderActions.addOrder(bagItems, bagTotalAmount, "walkIn", shopId));
                        navigation.navigate("OrderStatusFlow")
                    }}>
                        <Image 
                            source={icons.walk_in}
                            style={styles.walkInIconStyle}
                        />
                        <Text style={styles.sheetButtonTextStyle}>
                            Walk In
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.sheetNoteTextStyle}>
                    Home Delivery Charges: ??? 40
                </Text>
            </ImageBackground>
        );
    };

    return (
        <React.Fragment>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={COLORS.darkGreen}
                    barStyle="light-content"
                />

                {/* Top Bar */}
                <TopBar
                    searchEnabled={false}
                    headerText="Your Bag"
                    onBackButtonPress={() => navigation.goBack()}
                    mascotEnabled
                />

                {/* Shop Information Panel */}
                <ShopPanel
                    name={selectedShop.name}
                    address={selectedShop.address}
                    photo={selectedShop.photo}
                    phone={selectedShop.phone}
                    today={today}
                />

                 {/*Cart */}
                <FlatList
                    data={bagItems}
                    keyExtractor={(item) => item.itemId.toString()}
                    renderItem={({ item }) => (
                        <Card style={styles.cartCardStyle}>
                            <View
                                style={{
                                    alignItems: "center",
                                }}
                            >
                                <Text style={styles.itemHindiTextStyle}>
                                    {item.hindiName}
                                </Text>
                                <Image
                                    source={item.image}
                                    style={styles.itemImageStyle}
                                    resizeMode="contain"
                                />
                                <LinearGradient
                                    colors={[
                                        COLORS.fromPrimaryGradientColor,
                                        COLORS.toPrimaryGradientColor,
                                    ]}
                                    style={styles.cartGradientStyle}
                                >
                                    <Text style={styles.cartRateTextStyle}>
                                        ??? {item.pricePerUnitToPrint}
                                    </Text>
                                </LinearGradient>
                            </View>
                            <View style={styles.cartCardSectionStyle}>
                                <Text style={styles.itemNameTextStyle}>
                                    {item.name}
                                </Text>
                                {renderCounter(item)}
                                <Text style={styles.quantityHeaderTextStyle}>
                                    Quantity Bought
                                </Text>
                            </View>
                        </Card>
                    )}
                    style={styles.cartMainContainer}
                />

                {/* Button */}
                <TouchableOpacity
                    onPress={onShowBottomSheet}
                    style={styles.buttonContainerStyle}
                >
                    <LinearGradient
                        style={styles.buttonGradientStyle}
                        colors={[
                            COLORS.fromSecondaryGradientColor,
                            COLORS.toSecondaryGradientColor,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.buttonTextStyle}>
                            Complete Purchase
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            {visible ? (
                <TouchableWithoutFeedback onPress={onCloseBottomSheet}>
                    <View
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            backgroundColor: "black",
                            opacity: 0.6,
                        }}
                    />
                </TouchableWithoutFeedback>
            ) : null}
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[0, 300]}
                initialSnap={0}
                enabledContentTapInteraction={false}
                enabledGestureInteraction={false}
                renderContent={renderInner}
            />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cartMainContainer: {
        width: "100%",
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 10,
    },
    mascotIconStyle: {
        width: 30,
        height: 30,
        marginTop: -10,
        marginLeft: 5,
        tintColor: COLORS.orange,
    },
    cartCardStyle: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 5,
        elevation: 2,
        paddingTop: 10,
    },
    itemImageStyle: {
        height: 50,
        width: 60,
    },
    cartGradientStyle: {
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 20,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 5,
    },
    cartRateTextStyle: {
        fontSize: 12,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    cartCardSectionStyle: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2,
    },
    itemNameTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto_400Regular",
        color: COLORS.grey,
        marginBottom: 7,
    },
    quantityHeaderTextStyle: {
        fontSize: 12,
        fontFamily: "Roboto_400Regular",
        color: "#AAA",
    },
    counterMainContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    counterContainer1: {
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        width: 35,
        backgroundColor: "#EB6D6D",
        borderRadius: 2,
        marginRight: 5,
    },
    subtractIconStyle: {
        height: 25,
        width: 25,
    },
    counterQuantityBoxStyle: {
        width: 100,
        height: 35,
        borderColor: "rgba(232, 232, 235, 1)",
        borderWidth: 1,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    counterQuantityTextStyle: {
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
    },
    counterContainer2: {
        alignItems: "center",
        justifyContent: "center",
        height: 35,
        width: 35,
        backgroundColor: COLORS.primary,
        borderRadius: 2,
        marginLeft: 5,
    },
    addIconStyle: {
        height: 40,
        width: 40,
    },
    buttonContainerStyle: {
        width: "100%",
        paddingHorizontal: 12,
    },
    buttonGradientStyle: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "100%",
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    buttonTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    bottomSheetContentContainer: {
        height: 300,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 15,
    },
    sheetHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        width: "100%",
        paddingHorizontal: 24,
    },
    sheetHeaderText: {
        fontSize: 17,
        fontFamily: "Roboto_500Medium",
        color: "#1d1d1d",
    },
    cancelIconStyle: {
        height: 18,
        width: 18,
        resizeMode: "contain",
        tintColor: "#111",
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 10,
        paddingVertical: 5,
        backgroundColor: COLORS.orange
    },
    sheetTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    sheetButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 12,
        marginTop: 50,
        marginBottom: 20
    },
    sheetButtonStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: COLORS.orange,
        width: 180,
    },
    markerIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: "white",
        marginRight: 5
    },
    walkInIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: "white"
    },
    sheetButtonTextStyle: {
        fontSize: 18,
        fontFamily: "Roboto_500Medium",
        color: "white"
    },
    sheetNoteTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto_500Medium",
        color: "#888",
        alignSelf: "center"
    },
    homeDeliverrCardStyle: {
        alignSelf: "center",
        width: "95%",
        paddingHorizontal: 24,
        paddingVertical: 24
    },
    itemHindiTextStyle: {
        fontFamily: 'yantramanav_regular',
        fontSize: 16
    }
});

export default OrderSummaryScreen;
