// import React from "react";
// import { View,Text,KeyboardAvoidingView,StyleSheet,ScrollView } from "react-native";

// function Verifyotp(){
//     return(
//         <View>
//             <Text>hello</Text>
//         </View>
//     );
// }
// export default Verifyotp;
import React from 'react';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';


const Verifyotp = () => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const phoneInput = React.useRef(null);

    const OnPress = () => {
        if (phoneNumber.length !==0) {
            Alert.alert(
                "Confirm Number",
                phoneNumber,
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                    },

                    { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed"),
                    },
                ],
            );
        }
    }

    return (
        <View style={styles.container}>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                
                textContainerStyle={styles.textInput}
                onChangeFormattedText={text => {
                    setPhoneNumber(text);
                }}
                defaultCode="IN"
                layout='first'
                withShadow
                autoFocus
            />
            <Pressable
                style={styles.button}
                onPress={() => OnPress()}
                android_ripple="red"
            >
                <Text style={styles.text}>Send OTP</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneContainer: {
        width: '75%',
        height: 50,
    },
    button: {
        marginTop: 30,
        width: '75%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18d4d4',
    },
    textInput: {
        paddingVertical: 0,
    },
    text: {
        color:'white',
        fontWeight:'600'
    },
});
export default Verifyotp;