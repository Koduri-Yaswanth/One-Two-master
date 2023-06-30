import React from 'react';  
import {Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as Font from 'expo-font';
import {useState, useEffect} from 'react';

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

function SignIn({navigation}){
    return(
        <KeyboardAvoidingView >
            <View style={stylesa.mainview}>

            <View style={stylesa.Topview}>
              <CustomText style={stylesa.MainHeading}>One Two</CustomText>
            </View>
            <ScrollView style={stylesa.Bottomview}>
                <Text style={stylesa.Heading}>
                    Welcome{'\n'}
                    Back
                </Text>
                <View style={stylesa.Formview}>
                    <TextInput placeholder={"Email address*"} placeholderTextColor={"grey"} style={stylesa.TextInput}/>
                    <TextInput placeholder={"Password*"} secureTextEntry={true} placeholderTextColor={"grey"} style={stylesa.TextInput}/>
                    <TouchableOpacity style={stylesa.FPassword} onPress={() => navigation.navigate('Forgotpass')}>
                        <Text style={stylesa.SignUpText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesa.Button} onPress={() => navigation.navigate('Mainscreen')}>
                        <Text style={stylesa.ButtonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={stylesa.TextButton} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={stylesa.SignUpText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>    
            </ScrollView>
            
            </View>
        </KeyboardAvoidingView>
    )
}

const stylesa = StyleSheet.create({
    MainHeading:{
        fontSize:55,
        marginTop:"25%",
        marginLeft:"25%"


    },

    mainview:{
        
       
        backgroundColor:"#C0DBEA"
    },
    Topview:{
        width:"100%",
        height:"30%",
        backgroundColor:"#C0DBEA"
       
    },
    Bottomview:{
        width:"100%",
        height:"70%",
        backgroundColor:"#080202",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,

    },
    Imagestyle:{
      
        width:"65%",
        height:"100%",
        resizeMode:"contain",
        marginLeft:"17%"
    },
    Heading:{
        color:"#73BBC9",
        fontSize:40,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:70,
    },
    TextInput:{
        width:"90%",
        height:52,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#73BBC9",
        paddingLeft:10,
        marginTop:20,
        color:"#73BBC9",
    },
    Formview:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:30,
       
    },
    Button:{
        width:"90%",
        height:52,
        // color:"#F8325C",
        backgroundColor:"#73BBC9",
        borderRadius:10,
        marginTop:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    ButtonText:{
        fontWeight:"bold",
        fontSize:18,
        color:"#000"
    },
    SignUpText:{
        color:"#73BBC9"
    },
    FPassword:{
      width:"100%",
      display:"flex",
      alignItems:"flex-end",
      marginTop:15, 
      marginRight:50
    },
    TextButton:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        marginTop:20,   
    }
});

export default SignIn;