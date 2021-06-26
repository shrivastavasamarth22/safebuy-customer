import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import '@expo/match-media'
import {useMediaQuery} from 'react-responsive';

const HeaderBar = ({ headerText, onPress }) => {

    const isSmallDevice = useMediaQuery({
        maxDeviceWidth: 360
    })
    if (!isSmallDevice) {
        return (
            <View style={styles.container}>
                <Text style={styles.headerTextStyle}>
                    {headerText}
                </Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Ionicons name="md-settings-sharp" size={24} color="white" />
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <View style={[styles.container, { height: "9%" }]}>
                <Text style={styles.headerTextStyle}>
                    {headerText}
                </Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
                    <Ionicons name="md-settings-sharp" size={24} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "7%",
        backgroundColor: "#8c24e3",
        elevation: 5,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTextStyle: {
        fontSize: 20,
        color: "white",
        fontFamily: "Roboto_500Medium"
    },
    buttonStyle: {
        padding: 5
    }
})

export default HeaderBar