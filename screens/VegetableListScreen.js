import React, { useState, useMemo } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar,
    ToastAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { icons, COLORS } from "../constants";
import {
    TopBar,
    SearchBar,
    ActiveVegetablePicker,
    ActiveFruitPicker,
    OrderItemCard,
} from "../components/";
import { shopData } from "../mock-data";

const VegetableListScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const [search, setSearch] = useState("");
    const [active, setActive] = useState("vegetable");
    const [orderItems, setOrderItems] = useState([]);

    const { shopName, vegetables, fruits } = useMemo(() => {
        const vegetables = [];
        const fruits = [];
        const shop = shopData.find((s) => s.id === id);
        const shopName = (shop && shop.name) || "N/A";
        const searchRegex = new RegExp(search, "gi");

        if (shop && shop.items && shop.items.length) {
            const isSearchable = search && search.length > 3;
            shop.items.forEach((i) => {
                const nameMatches = searchRegex.test(i.name);
                const hindiNameMatches = searchRegex.test(i.hindiName);
                if (isSearchable && !(nameMatches || hindiNameMatches)) return;
                if (i.category === "vegetable") vegetables.push(i);
                if (i.category === "fruit") fruits.push(i);
            });
        }
        return { shopName, vegetables, fruits };
    }, [shopData, id, search]);

    const updateSearch = (query) => {
        setSearch(query);
    };

    const editOrder = (action, product, orderItem) => {
        const newOrderItems = orderItems.slice();
        if (!orderItem && action == "+") {
            const newItem = {
                itemId: product.itemId,
                increment: product.increment,
                multiplier: product.multiplier,
                pricePerUnitToPrint: product.pricePerUnitToPrint,
                unit: product.unit,
                hindiName: product.hindiName,
                name: product.name,
                photo: product.photo,
                qty: product.increment,
                total: product.increment * product.multiplier,
            };
            newOrderItems.push(newItem);
            setOrderItems(newOrderItems);
            return;
        }

        if (!orderItem && action == "-") {
            ToastAndroid.showWithGravity(
                "Cannot perform action since quantity is already 0",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
            return;
        }

        const newQty =
            action == "+"
                ? orderItem.qty + product.increment
                : orderItem.qty - product.increment;

        if (newQty === 0) {
            setOrderItems((currentList) =>
                currentList.filter((i) => i.itemId !== product.itemId)
            );
        }

        setOrderItems((currentList) =>
            currentList.map((item) => {
                if (item.itemId === product.itemId) {
                    return {
                        ...item,
                        qty: newQty,
                        total: newQty * product.multiplier,
                    };
                }
                return item;
            })
        );
    };

    const onButtonPress = () => {
        if (orderItems.length > 0) {
            navigation.navigate("Order Summary", {
                shopId: id,
                orderItems,
            });
        } else {
            ToastAndroid.showWithGravity(
                "You do not have any items in your cart!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    };

    const sumOrder = () => {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);
        return total.toFixed(2);
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={COLORS.darkGreen}
                barStyle="light-content"
            />

            {/* Top Bar */}
            <TopBar
                headerText={shopName}
                onBackButtonPress={() => navigation.goBack()}
                searchEnabled={false}
            />

            {/* Search Bar */}
            <SearchBar search={search} onChangeText={updateSearch} />

            {/* Vegetable or Fruit Picker */}
            {active === "vegetable" ? (
                <ActiveVegetablePicker onPress={() => setActive("fruit")} />
            ) : (
                <ActiveFruitPicker onPress={() => setActive("vegetable")} />
            )}
            {/* Vegetablle & Fruit List */}
            <FlatList
                data={active === "vegetable" ? vegetables : fruits}
                extraData={[orderItems]}
                keyExtractor={(product) => `itemNo-${product.itemId}`}
                contentContainerStyle={{ paddingHorizontal: 12 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => {
                    const orderItem = orderItems.find(
                        (i) => i.itemId === product.itemId
                    );
                    const quantity = (orderItem && orderItem.qty) || 0;
                    return (
                        <OrderItemCard
                            item={product}
                            quantity={quantity}
                            onAdd={() => editOrder("+", product, orderItem)}
                            onRemove={() => editOrder("-", product, orderItem)}
                        />
                    );
                }}
            />

            <TouchableOpacity onPress={() => onButtonPress()}>
                <LinearGradient
                    colors={[
                        COLORS.fromPrimaryGradientColor,
                        COLORS.toPrimaryGradientColor,
                    ]}
                    style={styles.buttonGradientStyle}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={styles.buttonContainer}>
                        <View
                            style={{
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.numberOfItemsTextStyle}>
                                {`0${orderItems.length} items`}
                            </Text>
                            <Text style={styles.totalAmountTextStyle}>
                                {"₹" + sumOrder()}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={styles.buttonTextStyle}>View Bag</Text>
                            <Image
                                source={icons.arrow_right}
                                resizeMode="contain"
                                style={styles.arrowIconStyle}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonGradientStyle: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "95%",
        alignSelf: "center",
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    numberOfItemsTextStyle: {
        fontSize: 14,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    totalAmountTextStyle: {
        fontSize: 16,
        fontFamily: "Roboto_500Medium",
        color: "white",
    },
    buttonTextStyle: {
        fontSize: 20,
        color: "white",
        fontFamily: "Roboto_500Medium",
    },
    arrowIconStyle: {
        width: 15,
        height: 15,
        tintColor: "white",
        marginLeft: 10,
        marginTop: 2,
    },
});

export default VegetableListScreen;
