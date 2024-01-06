
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });


    const onPress = async () => {
        
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }


    return (
        <View style={Styles.Container}>
            <View style={Styles.LogoRow}>
                <Text style={Styles.logotext}> tEzo Business Seeker</Text>
                <Icon style={Styles.icon} name="search-outline"></Icon>
            </View>
            <View style={Styles.ImageView}><Image style={Styles.idea} source={require('./../../../assets/images/idea.jpg')}></Image></View>
            <View style={Styles.underTextView}><Text style={Styles.underText}>Your Ultimate near-by Business finder</Text></View>
            <View style={Styles.expTextView}><Text style={Styles.expText}>Find and connect to businesses around you and save yourself STRESS!</Text></View>
            <View style={Styles.ButtonView}><TouchableOpacity onPress={onPress} style={Styles.Button}><Text style={Styles.ButtonText}>Login With Google</Text></TouchableOpacity></View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        padding : 20,
        // justifyContent : 'center',
        // alignItems : 'center'
        // justifyContent: 'space-around'
    },
    LogoRow: {
        marginTop: 30, flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    icon: {
        fontSize: 20,
        marginLeft: 10,
        color: Colors.PRIMARY,
    },
    logoimage: {
        width: 350,
        height: 200,
        objectFit: 'fill',
    },

    ImageView: {
        flex: 3,
        // backgroundColor : "orange"
    },

    idea: {
        // marginTop: 30,
        width: 350,
        height: 200,
        objectFit: 'contain',
    },
    logotext: {
        color: Colors.PRIMARY,
        fontFamily: 'outfit-extrabold',
        textAlign: 'center',
        fontSize: 24,
    },
    underTextView: {
        flex: 3,
        // backgroundColor : 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    underText: {
        fontSize: 30,
        textAlign: 'center',
        color: Colors.PRIMARY,
        fontFamily: 'outfit-bold',
        // marginTop: 30,
        // marginBottom: 30
    },
    expTextView: {
        // backgroundColor : Colors.teal,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    expText: {
        // backgroundColor : Colors.SUPERNOVA,
        // marginTop: 30,
        // marginBottom: 30,
        fontSize: 20,
        textAlign: 'center',
        color: Colors.BALI,
        fontFamily: 'outfit-bold'
    },
    ButtonView: {
        flex: 3,
        // backgroundColor : 'brown',
        justifyContent: 'center',
        marginBottom: 70
        // alignItems : 'center'
    },
    Button: {
        // marginTop: 50,
        display: 'flex',
        backgroundColor: Colors.SUPERNOVA,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    ButtonText: {
        color: Colors.WHITE,
        fontSize: 25,
        fontFamily: "outfit-extrabold"
    }
})