import React, {useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard
} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {Ionicons, AntDesign} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import BottomSheet from "reanimated-bottom-sheet";
import '@expo/match-media'
import {useMediaQuery} from 'react-responsive';

import * as customerActions from '../../store/actions/customer'

import {icons, images} from '../../constants'

import {GradientButton} from '../../components'

const UserSettings = ({navigation}) => {

    const user = useSelector(state => state.customer.customer);
    const dispatch = useDispatch();
    const addressSheetRef = useRef(null);

    const [visible, setVisible] = useState(false);
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pinCode, setPinCode] = useState("");

    const isSmallDevice = useMediaQuery({
        maxDeviceWidth: 360
    })

    const onAddress1Change = (query) => {
        setAddress1(query);
    }

    const onAddress2Change = (query) => {
        setAddress2(query);
    }

    const onLandmarkChange = (query) => {
        setLandmark(query)
    }

    const onPinChange = (query) => {
        setPinCode(query);
    }

    const onOpenBottomSheet = (ref) => {
        if (ref.current) {
            ref.current.snapTo(1)
        }
        setVisible(true)
    }

    const onCloseBottomSheet = (ref) => {
        if (ref.current) {
            ref.current.snapTo(0)
        }
        setVisible(false);
    }


    const onSaveButtonPress = () => {
        dispatch(customerActions.changeCustomerAddress(1, address1, address2, landmark, pinCode))
        Keyboard.dismiss();
        onCloseBottomSheet(addressSheetRef);
    }

    const AddressChangeField = () => {
        return (
            <View style={styles.addressContainer}>
                <Text style={styles.headerStyle}>
                    Change Address :
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(t) => onAddress1Change(t)}
                    value={address1}
                    placeholder={"Address Line 1"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(t) => onAddress2Change(t)}
                    value={address2}
                    placeholder={"Address Line 2"}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(t) => onLandmarkChange(t)}
                    value={landmark}
                    placeholder={"Nearby Landmark"}
                />
                <TextInput
                    style={[styles.input, {marginBottom: 20}]}
                    onChangeText={(t) => onPinChange(t)}
                    value={pinCode}
                    placeholder={"Pin Code"}
                />
                <GradientButton
                    onPress={onSaveButtonPress}
                    text={"Save"}
                />
            </View>

        )
    }

    if (!isSmallDevice) {
        return (
            <React.Fragment>
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
                <View style={styles.container}>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity onPress={navigation.goBack}>
                            <Image
                                source={icons.back}
                                style={styles.backButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={["rgba(140, 36, 227, 0.15)", "rgba(140, 36, 227, 0.2)"]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={styles.imgContainer}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            {
                                user.imageUri === ""
                                    ? <Image
                                        source={images.user}
                                        style={styles.image}
                                    />
                                    : <Image
                                        source={{uri: user.imageUri}}
                                        style={styles.image}
                                    />
                            }
                            <TouchableOpacity
                                style={styles.cameraButtonContainer}
                                onPress={() => navigation.navigate("Camera")}
                            >
                                <AntDesign name="camera" size={32} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={styles.infoContainer}>
                        <Text style={styles.headerTextStyle}>
                            User Profile :
                        </Text>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.subText}>
                                Name :
                            </Text>
                            <View style={styles.fieldTextContainer}>
                                <Text style={styles.fieldText}>
                                    {user.name}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.fieldContainer}>
                            <Text style={styles.subText}>
                                Phone :
                            </Text>
                            <View style={styles.fieldTextContainer}>
                                <Text style={styles.fieldText}>
                                    +91 {user.phone}
                                </Text>
                            </View>
                        </View>

                        <View style={{width: "100%"}}>
                            <Text style={styles.subText}>
                                Address :
                            </Text>
                            <Text style={styles.addressText}>
                                {user.address1 + ","}
                            </Text>
                            <Text style={styles.addressText}>
                                {user.address2 + ", " + user.landmark}
                            </Text>
                            <View style={styles.fieldTextContainer}>
                                <View style={{flex: 1}}>
                                    <Text style={styles.addressText}>
                                        {user.city + ", " + user.state}
                                    </Text>
                                    <Text style={styles.addressText}>
                                        {user.pinCode}
                                    </Text>
                                </View>
                                <TouchableOpacity style={{
                                    padding: 10,
                                }}
                                                  onPress={() => onOpenBottomSheet(addressSheetRef)}
                                >
                                    <Ionicons name="md-pencil" size={20} color="#666"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {visible ? (
                    <TouchableWithoutFeedback onPress={() => {
                        onCloseBottomSheet(addressSheetRef)
                    }}>
                        <View
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                backgroundColor: "black",
                                opacity: 0.6,
                            }}
                        />
                    </TouchableWithoutFeedback>
                ) : null}
                <BottomSheet
                    ref={addressSheetRef}
                    snapPoints={[0, 400]}
                    initialSnap={0}
                    enabledContentTapInteraction={false}
                    enabledContentGestureInteraction={false}
                    renderContent={AddressChangeField}
                />
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <StatusBar barStyle="light-content" backgroundColor="#6d0fbc"/>
                <View style={styles.container}>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity onPress={navigation.goBack}>
                            <Image
                                source={icons.back}
                                style={styles.backButtonStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={["rgba(140, 36, 227, 0.15)", "rgba(140, 36, 227, 0.2)"]}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                        style={styles.imgContainer}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            {
                                user.imageUri === ""
                                    ? <Image
                                        source={images.user}
                                        style={smallStyles.image}
                                    />
                                    : <Image
                                        source={{uri: user.imageUri}}
                                        style={smallStyles.image}
                                    />
                            }
                            <TouchableOpacity
                                style={smallStyles.cameraButtonContainer}
                                onPress={() => navigation.navigate("Camera")}
                            >
                                <AntDesign name="camera" size={28} color="white"/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                    <View style={styles.infoContainer}>
                        <Text style={smallStyles.headerTextStyle}>
                            User Profile :
                        </Text>
                        <View style={smallStyles.fieldContainer}>
                            <Text style={styles.subText}>
                                Name :
                            </Text>
                            <View style={styles.fieldTextContainer}>
                                <Text style={smallStyles.fieldText}>
                                    {user.name}
                                </Text>
                            </View>
                        </View>

                        <View style={smallStyles.fieldContainer}>
                            <Text style={styles.subText}>
                                Phone :
                            </Text>
                            <View style={smallStyles.fieldTextContainer}>
                                <Text style={smallStyles.fieldText}>
                                    +91 {user.phone}
                                </Text>
                            </View>
                        </View>

                        <View style={{width: "100%"}}>
                            <Text style={styles.subText}>
                                Address :
                            </Text>
                            <Text style={smallStyles.addressText}>
                                {user.address1 + ","}
                            </Text>
                            <Text style={smallStyles.addressText}>
                                {user.address2 + ", " + user.landmark}
                            </Text>
                            <View style={styles.fieldTextContainer}>
                                <View style={{flex: 1}}>
                                    <Text style={smallStyles.addressText}>
                                        {user.city + ", " + user.state}
                                    </Text>
                                    <Text style={smallStyles.addressText}>
                                        {user.pinCode}
                                    </Text>
                                </View>
                                <TouchableOpacity style={{
                                    padding: 10,
                                }}
                                                  onPress={() => onOpenBottomSheet(addressSheetRef)}
                                >
                                    <Ionicons name="md-pencil" size={20} color="#666"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                {visible ? (
                    <TouchableWithoutFeedback onPress={() => {
                        onCloseBottomSheet(addressSheetRef)
                    }}>
                        <View
                            style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                backgroundColor: "black",
                                opacity: 0.6,
                            }}
                        />
                    </TouchableWithoutFeedback>
                ) : null}
                <BottomSheet
                    ref={addressSheetRef}
                    snapPoints={[0, 400]}
                    initialSnap={0}
                    enabledContentTapInteraction={false}
                    enabledContentGestureInteraction={false}
                    renderContent={AddressChangeField}
                />
            </React.Fragment>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    backButtonContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 1
    },
    imgContainer: {
        width: "100%",
        height: "45%",
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: "15%"
    },
    infoContainer: {
        width: "100%",
        height: "70%",
        top: "40%",
        backgroundColor: 'white',
        position: "absolute",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignSelf: 'center',
        paddingHorizontal: 24,
        paddingTop: 30
    },
    fieldContainer: {
        width: "100%",
        marginBottom: 30
    },
    fieldTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
    },
    subText: {
        fontFamily: 'uber_move_bold',
        fontSize: 14,
        color: "#aaa",
    },
    fieldText: {
        fontFamily: 'uber_move_bold',
        fontSize: 22,
        color: "#666",
        width: "90%"
    },
    addressText: {
        fontFamily: 'uber_move_bold',
        fontSize: 18,
        color: "#666",
        textAlign: 'left',
        width: "80%"
    },
    addressContainer: {
        height: 400,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 24,
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
    cameraButtonContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#8c24e3",
        alignSelf: "flex-end",
        marginLeft: -60,
        elevation: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonStyle: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        tintColor: "white",
    },
    headerTextStyle: {
        color: "#666",
        fontFamily: "uber_move_bold",
        fontSize: 28,
        marginBottom: 30
    },
})

const smallStyles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginTop: "15%"
    },
    fieldContainer: {
        width: "100%",
        marginBottom: 20
    },
    fieldText: {
        fontFamily: 'uber_move_bold',
        fontSize: 20,
        color: "#666",
        width: "90%"
    },
    addressText: {
        fontFamily: 'uber_move_bold',
        fontSize: 16,
        color: "#666",
        textAlign: 'left',
        width: "80%"
    },
    cameraButtonContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#8c24e3",
        alignSelf: "flex-end",
        marginLeft: -60,
        elevation: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTextStyle: {
        color: "#666",
        fontFamily: "uber_move_bold",
        fontSize: 24,
        marginBottom: 20
    },
})

export default UserSettings