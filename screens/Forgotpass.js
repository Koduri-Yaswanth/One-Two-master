import React from "react";
import{View,Text, KeyboardAvoidingView,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity} from "react-native";
import * as Font from 'expo-font';
import {useState, useEffect} from 'react'


const CustomText = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);
  
    useEffect(() => {
      async function loadFont() {
        await Font.loadAsync({
          'custom-font': require('../assets/fonts/KaushanScript.ttf'),
        });
  
        setFontLoaded(true);
      }
  
      loadFont();
    }, []);
  
    if (!fontLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <Text style={{ ...props.style, fontFamily: 'custom-font' }}>
        {props.children}
      </Text>
    );
  };


function Forgotpass(navigation){

    return(
        <KeyboardAvoidingView style={stylesa.mainview}>
        <ScrollView>
        <View>
            <Image style={stylesa.Imagestyle} source={require('../assets/password.png')} />
        </View>
        <View>
            <CustomText style={stylesa.text1}>Forgot Password?</CustomText> 
            <Text style={stylesa.text2}>Please enter your email address to recive{'\n'}a verification code</Text>
            <TextInput placeholder={"Email Adresss*"} placeholderTextColor={'grey'} style={stylesa.textinput} />
            <TouchableOpacity style={stylesa.Button} onPress={() => navigation.navigate('Verifyotp')}> 
                <Text style={stylesa.ButtonText}>Send Email</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const stylesa = StyleSheet.create({
    Imagestyle:{
        height:200,
        width:200,
        marginTop:"29%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:"24%",

    },
    mainview:{
        
        flex:1,
        flexDirection:'column',
        justifycontent:'center',
        alignitems:'center',
        backgroundColor:"#080202"
    },
    text1:{
        textAlign:'center',
        fontSize:30,
        color:"#73BBC9"
    },
    text2:{
        textAlign:"center",
        paddingTop:"8%",
        fontSize:15,
        // fontWeight:"bold",
        color:"#C0DBEA"
    },
    textinput:{
        width:"85%",
        height:52,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#73BBC9',
        paddingLeft:10,
        marginTop:"10%",
        color:'#73BBC9',
        marginHorizontal:"8%"
        
    },
    Button:{
        width:"85%",
        height:52,
        backgroundColor:'#73BBC9',
        borderRadius:10,
        marginTop:20,
        marginHorizontal:"8%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    ButtonText:{
        color:"#080202",
        fontWeight:"bold",
        fontSize:18
    }
  
})
export default Forgotpass;