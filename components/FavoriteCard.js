import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableOpacity} from "react-native";
import {Card} from "react-native-shadow-cards";
import call from "react-native-phone-call";
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

import {icons} from '../constants'

/**
 * @param {Shop} shop The shop object
 * @param {styleObject} style An external style object
 * @param {func} onCardPress The callback to call when user taps the card
 * @param {func} onRemovePress The callback to call when user taps the remove option
 * */

const callArgs = {
    number: '9893614220',
    prompt: true
}

const FavoriteCard = ({shop, onCardPress, onRemovePress, style}) => {
    const [visible, setVisible] = useState(false);
    return (
        <View style={style}>
            <TouchableNativeFeedback onPress={onCardPress}>
                <View style={[styles.cardStyle]}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Image
                            source={shop.photo}
                            style={styles.shopImageStyle}
                        />
                        <View style={{
                            flex: 2.5,
                        }}>
                            <View style={styles.shopNameRow}>
                                <Image
                                    source={icons.vegetables}
                                    style={styles.vegetableIconStyle}
                                />
                                <Text style={styles.shopNameTextStyle}>
                                    {shop.name}
                                </Text>
                            </View>
                            <Text style={styles.shopAddressTextStyle}>
                                {shop.address}
                            </Text>
                            <Text style={{
                                fontFamily: "Roboto_500Medium",
                                color: 'black'
                            }}>
                                {shop.phone}
                            </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={{
                                padding: 10
                            }}
                                onPress={() => setVisible(!visible)}
                            >
                                <Entypo name={visible ? "chevron-up" : "chevron-down"} size={32} color="#aaa"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
            {visible
                ? <View style={styles.optionContainerStyle}>
                    <TouchableNativeFeedback onPress={onRemovePress}>
                        <View style={styles.removeOptionContainer}>
                            <Ionicons name="trash" size={24} color="#b00020"/>
                            <Text style={styles.removeTextStyle}>
                                Remove
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={async () => call(callArgs).catch(console.error)}
                    >
                        <View style={styles.callOptionContainer}>
                            <MaterialIcons name="call" size={24} color="#41c300"/>
                            <Text style={styles.callTextStyle}>
                                Call
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        width: "100%",
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 5
    },
    shopImageStyle: {
        width: 110,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 5,
        marginRight: 10
    },
    vegetableIconStyle: {
        width: 22,
        height: 22,
        marginRight: 5
    },
    shopNameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    shopNameTextStyle: {
        marginLeft: 5,
        fontSize: 14,
        fontFamily: "Roboto_500Medium",
    },
    shopAddressTextStyle: {
        fontSize: 12,
        marginBottom: 5,
        color: "#aaa"
    },
    iconContainer: {
        flex: 1.2,
        alignItems: 'center',
    },
    optionContainerStyle: {
        width: "100%",
        height: 60,
        backgroundColor: 'white',
        marginTop: -5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    removeOptionContainer: {
        flexDirection: 'row',
        height: "100%",
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    callOptionContainer: {
        flexDirection: 'row',
        height: "100%",
        width: "60%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    removeTextStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        color: '#b00020',
        marginLeft: 10
    },
    callTextStyle: {
        fontFamily: "Roboto_500Medium",
        fontSize: 18,
        color: '#41c300',
        marginLeft: 10
    }
})

export default FavoriteCard;