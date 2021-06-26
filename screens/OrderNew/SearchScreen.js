import React, { useState, useMemo } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { icons } from "../../constants";
import { TopBar, SearchBar } from "../../components";

import { shopData } from "../../mock-data";

const SearchScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");

    const { newData } = useMemo(() => {
        const newData = shopData.map((shop) => ({
            id: shop.id,
            name: shop.name,
            location: shop.location,
            photo: shop.photo,
        }));
        return { newData };
    }, [shopData]);

    const initialRegion = {
        latitude: 23.188180116809647,
        longitude: 77.44769092616096,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    };

    const updateSearch = (query) => {
        setSearch(query);
    };

    const onArrowPress = () => {
        console.log(search);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#6d0fbc" barStyle="light-content" />
            <TopBar
                headerText="Search"
                onBackButtonPress={() => navigation.goBack()}
                lavenderEnabled
            />
            <SearchBar
                searchText={search}
                onChangeText={updateSearch}
                onArrowPress={onArrowPress}
                placeholder={"Search sellers by phone number"}
            />

            <MapView
                style={{ width: "100%", height: "100%"}}
                region={initialRegion}
                provider={PROVIDER_GOOGLE}
            >
                {newData.map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={marker.location}
                            title={marker.name}
                        >
                            <View
                                style={styles.parentMarkerViewStyle}
                            >
                                <View
                                    style={styles.childMarkerViewStyle}
                                >
                                    <Image
                                        source={icons.vegetables}
                                        style={styles.vegetableIconStyle}
                                    />
                                </View>
                            </View>
                        </Marker>
                    );
                })}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    parentMarkerViewStyle: {
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "white",
    },
    childMarkerViewStyle: {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "#8c24e3",
    },
    vegetableIconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain",
    }
});

export default SearchScreen;
