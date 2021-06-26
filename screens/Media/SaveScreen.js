import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import * as MediaLibrary from 'expo-media-library';
import {useDispatch} from "react-redux";
import * as customerActions from '../../store/actions/customer'

const SaveScreen = ({navigation, route}) => {
    const {image} = route.params

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backButtonContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 1
    },
    image: {
        flex: 1,
        alignSelf: 'center',
        resizeMode: "cover"
    },
})

export default SaveScreen











