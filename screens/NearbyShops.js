import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    FlatList,
    TouchableOpacity,
    StatusBar,
    ToastAndroid
} from "react-native";
import { Card } from "react-native-shadow-cards";

import { shopData } from "../mock-data";
import { icons, COLORS } from "../constants";
import { TopBar } from "../components/";

const { SCREEN_WIDTH } = Dimensions.get("window");

const NearbyShops = ({ navigation }) => {
    const [favoriteList, setFavoriteList] = useState([]);

    const editFavoriteList = async (id) => {
        const newList = favoriteList.slice();
        const found = newList.find(item => item == id)
        if (!!found) {
            const filteredList = newList.filter(item => item != id);
            setFavoriteList(filteredList)
            return;
        } else {
            if (newList.length <= 4) {
                newList.push(id);
                setFavoriteList(newList);
            } else {
                ToastAndroid.showWithGravity(
                    "Cannot favorite more than 5",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                )
                return;
            }
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
                headerText="Nearby Shops"
                searchEnabled={true}
                onBackButtonPress={() => navigation.goBack()}
                onSearchButtonPress={() => navigation.navigate("Search")}
            />

            {/* Notice */}
            <View style={styles.noticeContainer}>
                <Text style={styles.noticeText}>
                    Do favourite your regular shops, you can only favourite upto
                    5.
                </Text>
            </View>

            {/* Shop List */}
            <FlatList
                data={shopData}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => `itemNo-${item.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() =>
                                navigation.navigate("Vegetable List", {
                                    id: item.id,
                                })
                            }
                        >
                            <View style={styles.listContainer}>
                                <Image
                                    source={item.photo}
                                    resizeMode="cover"
                                    style={styles.listImage}
                                />

                                <Card style={styles.listCard}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.shopName}>
                                            {item.name}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() =>
                                                editFavoriteList(item.id)
                                            }
                                            style={{
                                                padding: 5
                                            }}
                                        >
                                            {
                                                (!!favoriteList.find(i => i == item.id)) 
                                                ? <Image
                                                source={icons.heart_filled}
                                                resizeMode="cover"
                                                style={styles.heartIcon}
                                                />
                                                : <Image
                                                source={icons.heart_notfilled}
                                                resizeMode="cover"
                                                style={styles.heartIcon}
                                                />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.listInfoContainer}>
                                        <Text style={styles.address}>
                                            {item.address}
                                        </Text>

                                        <View style={styles.phoneContainer}>
                                            <Image
                                                source={icons.phone}
                                                style={styles.phoneIcon}
                                                resizeMode="contain"
                                            />
                                            <Text style={styles.phoneNumber}>
                                                {item.phone}
                                            </Text>
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    noticeContainer: {
        width: SCREEN_WIDTH,
        height: 60,
        backgroundColor: "#EAEAEA",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    noticeText: {
        fontSize: 16,
        fontFamily: "Roboto_400Regular",
    },
    listContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        width: SCREEN_WIDTH,
    },
    listImage: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    listCard: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    shopName: {
        fontFamily: "Roboto_700Bold",
        fontSize: 18,
        color: COLORS.darkGreen,
    },
    heartIcon: {
        height: 30,
        width: 30,
    },
    listInfoContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    address: {
        fontFamily: "Roboto_500Medium",
        fontSize: 12,
        color: "#444",
        lineHeight: 15,
        width: "60%",
    },
    phoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
    },
    phoneIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    phoneNumber: {
        fontFamily: "Roboto_500Medium",
        fontSize: 15,
        color: "#444",
    },
});

export default NearbyShops;
