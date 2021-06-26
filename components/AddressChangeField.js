import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

/**
 * @param {func} onChange1 The callback to call when we change address 1
 * @param {func} onChange2 The callback to call when we change address 2
 * @param {func} onChange3 The callback to call when we change pin code
 * @param {string} value1 The address 1 value of the text input
 * @param {string} value2 The address 2 value of the text input
 * @param {string} value3 The pin code value of the text input
 * @param {func} onButtonPress The callback to call when we press the call to action
 * */

const AddressChangeField = (onChange1, onChange2, onChange3, onButtonPress, value1, value2, value3) => {
    return (
        <View style={styles.addressContainer}>
            <View style={{
                flex: 1
            }}>
                <Text style={styles.headerStyle}>
                    Change Address :
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChange1}
                    value={value1}
                    placeholder={"Address Line 1"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChange2}
                    value={value2}
                    placeholder={"Address Line 2"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChange3}
                    value={value3}
                    placeholder={"Pin Code"}
                />
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onButtonPress}
            >
                <LinearGradient
                    colors={["#ab47ff", "#8c24e3"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.buttonGradientStyle}
                >
                    <Text style={styles.buttonTextStyle}>
                        Save
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addressContainer: {
        height: 400,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 24
    },
    headerStyle: {
        fontFamily: 'uber_move_medium',
        fontSize: 20,
        color: "#1d1d1d",
        marginBottom: 10
    },
    input: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "white",
        borderColor: "#CCC",
        borderWidth: 0.6,
        marginTop: 10,
        paddingLeft: 12,
        fontFamily: 'uber_move_medium',
        fontSize: 16
    },
    buttonContainer: {
        width: "100%",
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
})

export default AddressChangeField