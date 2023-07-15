import React from "react";
import{View,Text, KeyboardAvoidingView,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity} from "react-native";
import * as Font from 'expo-font';
import {useState, useEffect} from 'react'
import { firebase } from '../firebaseConfig';

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



  const [email, setEmail] = useState('')


  const forgotpassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Password Reset Email Sent")
    })
    .catch((error) => {
      alert(error)
    })
  }

    return(
        <KeyboardAvoidingView style={styles.mainview}>
        <ScrollView>
        <View>
            <Image style={styles.Imagestyle} source={require('../assets/password.png')} />
        </View>
        <View>
            <CustomText style={styles.text1}>Forgot Password?</CustomText> 
            <Text style={styles.text2}>Please enter your email address to change{'\n'}your password</Text>
            <TextInput 
            placeholder={"Email Adresss*"} 
            placeholderTextColor={'grey'}
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false} 
            autoCapitalize="none" 
            style={styles.textinput} 
            />
            <TouchableOpacity style={styles.Button} onPress={() => {forgotpassword()}}> 
                <Text style={styles.ButtonText}>Send Email</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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