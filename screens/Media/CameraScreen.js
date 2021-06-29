import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar} from "react-native";
import {Camera} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {MaterialIcons, Ionicons, AntDesign} from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import {images} from "../../constants";
import * as customerActions from '../../store/actions/customer'

const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [hasMediaPermission, setHasMediaPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            let {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted')
            status = await MediaLibrary.requestPermissionsAsync();
            setHasMediaPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) {
        return <View style={{
            flex: 1,
            backgroundColor: "black"
        }}/>
    }

    if (hasPermission === false) {
        return <Text>No Access to camera</Text>
    }

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync({
                quality: 1,
            })
            setImage(data.uri)
        }
    }

    const saveImage = async () => {
        if (hasPermission) {
            const result = await MediaLibrary.createAssetAsync(image)
            dispatch(customerActions.changeCustomerPicture(1, result.uri))
            navigation.reset({
                index: 0,
                routes: [{ name: "Settings" }]
            })
        } else {
            return null;
        }

    }

    return (
        <View
            style={styles.container}
        >
            <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.camera}
                    type={type}
                    autoFocus={Camera.Constants.AutoFocus.on}
                    flashMode={flash}
                />
            </View>

            <View style={styles.controlContainer}>
                <View style={styles.cameraControls}>
                    <TouchableOpacity
                        onPress={() => {
                            setFlash(
                                flash === Camera.Constants.FlashMode.on
                                    ? Camera.Constants.FlashMode.off
                                    : Camera.Constants.FlashMode.on
                            );
                        }}
                        style={{
                            padding: 10,
                        }}
                    >
                        {
                            flash === Camera.Constants.FlashMode.on
                                ? <Ionicons name="flash" size={30} color="#BBB"/>
                                : <Ionicons name="flash-off" size={30} color="#BBB"/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cameraButton}
                        onPress={takePicture}
                    >
                        <AntDesign name="camera" size={38} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                        style={{
                            padding: 10
                        }}
                    >
                        <MaterialIcons name="flip-camera-android" size={30} color="#BBB"/>
                    </TouchableOpacity>
                </View>
                <Image
                    source={images.safebuy_2}
                    style={styles.safebuyLogo}
                />
            </View>
            {
                image &&
                <View style={styles.imagePreviewContainer}>
                    <View style={styles.previewImageBorder}>
                        <Image
                            source={{uri: image}}
                            style={styles.previewImage}
                        />
                    </View>
                    <View style={styles.previewButtonContainer}>
                        <TouchableOpacity
                            style={styles.previewButton}
                            onPress={() => setImage(null)}
                        >
                            <Text style={styles.previewButtonText}>
                                Retry
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.previewButton}
                            onPress={saveImage}
                        >
                            <Text style={styles.previewButtonText}>
                                Ok
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    cameraContainer: {
        height: "70%"
    },
    camera: {
        flex: 1,
    },
    controlContainer: {
        width: "100%",
        height: "70%",
        top: "65%",
        backgroundColor: 'rgba(255, 255, 255, 1)',
        position: "absolute",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: "#EEE",
        borderWidth: 2,
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingTop: 10
    },
    cameraControls: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    cameraButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#8c24e3",
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    safebuyLogo: {
        width: "80%",
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    imagePreviewContainer: {
        position: "absolute",
        bottom: "40%",
        right: 20,
        justifyContent: 'center',
        flex: 1
    },
    previewImageBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 170,
        borderRadius: 85,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    previewImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
    },
    previewButtonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    previewButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width: 75,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 5
    },
    previewButtonText: {
        fontFamily: 'Roboto_500Medium',
        color: "white",
        fontSize: 14
    }
})


export default CameraScreen;