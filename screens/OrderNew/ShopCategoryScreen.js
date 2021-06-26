import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { TopBar } from "../../components"
import { images, icons, COLORS } from '../../constants';
const { SCREEN_WIDTH } = Dimensions.get("window");

const ShopCategoryScreen = ({ navigation, route }) => {

    return (
        <ImageBackground source={images.background} style={styles.backgroundImage}>
            <StatusBar 
                backgroundColor="#6d0fbc"
                barStyle="light-content"
            />  
            
            {/* Top Bar */}
            <TopBar 
                onBackButtonPress={() => navigation.goBack()}
                headerText="Shop Category"
                searchEnabled={true}
                lavenderEnabled={true}
                onSearchButtonPress={() => navigation.navigate("Search")}
            />

            {/* List */}
            <View style={{
                width: SCREEN_WIDTH,
                marginTop: 25,
            }}>
                <TouchableOpacity style={styles.listElement}
                    onPress={() => navigation.navigate("Nearby Shops")}
                >
                    <Image 
                        source={icons.vegetables}
                        style={styles.vegetableIconStyle}
                    />
                    <Text style={styles.listTextStyle}>
                        Vegetables & Fruits Shop
                    </Text>
                </TouchableOpacity>
                <View 
                    style={styles.divider}
                />
            </View>

            <View style={styles.bottomMessageContainer}>
                <Text style={styles.messageHeader}>
                    Coming Soon In Our Bhopal...
                </Text>
                <Text style={styles.messageSubText}>
                    Laundry, Dairy and more...
                </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: "white"
    },
    listElement: {
        flexDirection: "row",
        alignItems: "center",
        width: SCREEN_WIDTH,
        paddingLeft: 15
    },
    vegetableIconStyle: {
        width: 40,
        height: 40,
    },
    listTextStyle: {
        fontSize: 17,
        fontFamily: "Roboto_500Medium",
        marginLeft: 20,
        color: COLORS.grey
    },
    divider: {
        width: SCREEN_WIDTH,
        height: 1,
        backgroundColor: COLORS.grey,
        marginTop: 20,
        opacity: 0.3
    },
    bottomMessageContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    messageHeader: {
        fontFamily: "Roboto_700Bold",
        fontSize: 21,
        textAlign: "center",
        color: COLORS.grey,
        opacity: 0.5, 
        marginBottom: 10
    },
    messageSubText: {
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        textAlign: "center",
        color: COLORS.grey,
        opacity: 0.5
    }

})

export default ShopCategoryScreen;