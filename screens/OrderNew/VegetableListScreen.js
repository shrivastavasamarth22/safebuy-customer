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
import { useSelector, useDispatch } from "react-redux";

import { icons, COLORS } from "../../constants";
import {
    TopBar,
    SearchBar,
    ActiveVegetablePicker,
    ActiveFruitPicker,
    OrderItemCard,
} from "../../components";
import { shopData } from "../../mock-data";

import * as bagActions from '../../store/actions/bag'

const VegetableListScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const [search, setSearch] = useState("");
    const [active, setActive] = useState("vegetable");
    const [barVisible, setBarVisible] = useState(false)

    const { shopName, vegetables, fruits } = useMemo(() => {
        const vegetables = [];
        const fruits = [];
        const shop = shopData.find((s) => s.id === id);
        const shopName = (shop && shop.name) || "N/A";
        const searchRegex = new RegExp(search, "gi");

        if (shop && shop.items && shop.items.length) {
            const isSearchable = search && search.length > 1;
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

    const dispatch = useDispatch();

    const bagTotalAmount = useSelector(state => state.bag.totalAmount);
    const bagItems = useSelector(state => {
        const transformedBagItems = [];
        for (const key in state.bag.items) {
            transformedBagItems.push({
                itemId: key,
                qty: state.bag.items[key].qty,
                sum: state.bag.items[key].sum
            })
        }
        return transformedBagItems;
    })

    const editOrder = (action, product) => {
        if (action === "+") {
            dispatch(bagActions.addToBag(product))
        } else if (action === "-") {
            const foundItem = bagItems.find(i => i.itemId === product.itemId.toString());
            console.log(foundItem);
            if (!!foundItem) {
                dispatch(bagActions.removeFromBag(product.itemId))
            } else {
                ToastAndroid.showWithGravity(
                    "The item is not in your bag",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
            }
        }
    }

    const onButtonPress = () => {
        if (bagItems.length > 0) {
            navigation.navigate("Order Summary", {
                shopId: id,
            });
        } else {
            ToastAndroid.showWithGravity(
                "You do not have any items in your cart!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
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
                searchEnabled
                onSearchButtonPress={() => {
                    setBarVisible((prev) => !prev)
                }}
            />

            {/* Search Bar */}
            {
                barVisible
                    ? <SearchBar
                        search={search}
                        onChangeText={updateSearch}
                        placeholder={"Search items here"}
                    />
                    : null
            }


            {/* Vegetable or Fruit Picker */}
            {active === "vegetable" ? (
                <ActiveVegetablePicker onPress={() => setActive("fruit")} />
            ) : (
                <ActiveFruitPicker onPress={() => setActive("vegetable")} />
            )}
            {/* Vegetable & Fruit List */}
            <FlatList
                data={active === "vegetable" ? vegetables : fruits}
                keyExtractor={(product) => `itemNo-${product.itemId}`}
                contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 5 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: product }) => {
                    const orderItem = bagItems.find(
                        i => i.itemId === product.itemId.toString()
                    );
                    const quantity = orderItem ? orderItem.qty : 0;
                    return (
                        <OrderItemCard
                            item={product}
                            quantity={quantity}
                            onAdd={() => editOrder("+", product)}
                            onRemove={() => editOrder("-", product)}
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
                                {`0${bagItems.length} items`}
                            </Text>
                            <Text style={styles.totalAmountTextStyle}>
                                {`₹ ${bagTotalAmount}`}
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
        backgroundColor: "white"
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
