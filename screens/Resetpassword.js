import React from "react";
import{View,Text, KeyboardAvoidingView,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity} from "react-native";

function Resetpassword(){
    return(
        <KeyboardAvoidingView style={stylesa.mainview}>
            <View>

            </View>
        <ScrollView style={stylesa.Bottomview}>

        </ScrollView>
            
            

        </KeyboardAvoidingView>

    );
}
const stylesa = StyleSheet.create({

    mainview:{
        
        flex:1,
        flexDirection:'column',
        justifycontent:'center',
        alignitems:'center',
        backgroundColor:"#C0DBEA"
    },
    Bottomview:{
        width:"100%",
        height:"70%",
        backgroundColor:"#080202",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    }
})
export default Resetpassword;