import React from "react";
import {Text, StyleSheet, View, Button, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, SafeAreaView} from "react-native";
import * as Font from "expo-font";
import { useState, useEffect } from "react";
import BackIcon from "react-native-vector-icons/Feather";
import { firebase, db } from "../firebaseConfig";

const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../assets/fonts/KaushanScript.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: "custom-font" }}>
      {props.children}
    </Text>
  );
};

function SignUp(navigaton) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  registerUser = async (fullname, email, mobile, password, confirmpassword) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.emailVerified({
            handleCodeInApp: true,
            url: "https://one-two-master.firebaseapp.com",
          })
          .then(() => {
            alert("verificaton Email Sent");
          })
          .then(async () => {
            db.collection("Users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                fName: fullname,
                userEmail: email,
                userMobile: mobile,
                userPassword: password,
              })
              // .then(() => {
              //   alert("user data is saved");
              // })
              .catch(error);
          });
      });
  };

  return (
    <KeyboardAvoidingView style={styles.mainview}>
      <SafeAreaView style={styles.Topview}>
        <CustomText style={styles.MainHeading}>One Two</CustomText>
      </SafeAreaView>
      <ScrollView style={styles.Bottomview}>
        <BackIcon
          style={styles.icon}
          name="chevron-left"
          size={60}
          color={"#73BBC9"}
        />
        <Text style={styles.Heading}>CREATE ACCOUNT</Text>
        <View style={styles.Formview}>
          <TextInput
            placeholder={"Full Name*"}
            placeholderTextColor={"grey"}
            onChangeText={(fullname) => setFullname(fullname)}
            autoCorrect={false}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Email*"}
            placeholderTextColor={"grey"}
            onChangeText={(email) => setEmail(email)}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.TextInput}
          />
          <View style={styles.Formview1}>
            <TextInput
              placeholder={"Mobile*"}
              placeholderTextColor={"grey"}
              onChangeText={(mobile) => setMobile(mobile)}
              autoCorrect={false}
              style={styles.TextInput1}
            />

            <TouchableOpacity style={styles.Vbutton}>
              <Text style={styles.vtext}>Verify</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder={"Password*"}
            secureTextEntry={true}
            placeholderTextColor={"grey"}
            onChangeText={(password) => setPassword(password)}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Confirm Password*"}
            secureTextEntry={true}
            placeholderTextColor={"grey"}
            onChangeText={(confirmpassword) =>
              setConfirmpassword(confirmpassword)
            }
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.TextInput}
          />
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              registerUser(fullname, email, mobile, password, confirmpassword)
            }
          >
            <Text style={styles.ButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  MainHeading: {
    fontSize: 55,
    marginTop: "25%",
    marginLeft: "25%",
  },
  mainview: {
    flex: 1,
    flexDirection: "column",
    justifycontent: "center",
    alignitems: "center",
    backgroundColor: "#C0DBEA",
  },
  Topview: {
    width: "100%",
    height: "24%",
    backgroundColor: "#C0DBEA",
  },
  Bottomview: {
    width: "100%",
    height: "80%",
    backgroundColor: "#080202",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: {
    marginLeft: 15,
    marginTop: 15,
  },
  Imagestyle: {
    width: "65%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: "17%",
  },
  Heading: {
    color: "#73BBC9",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 15,
  },
  TextInput: {
    width: "90%",
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#73BBC9",
    paddingLeft: 10,
    marginTop: 20,
    color: "#73BBC9",
  },
  Formview: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  Formview1: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginRight: 35,
  },
  TextInput1: {
    width: "80%",
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#73BBC9",
    paddingLeft: 10,
    marginTop: 20,
    color: "#73BBC9",
  },
  Vbutton: {
    height: "60%",
    width: "30%",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 8,
  },
  vtext: {
    color: "#73BBC9",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  Button: {
    width: "90%",
    height: 52,
    backgroundColor: "#73BBC9",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  SignUpText: {
    color: "#73BBC9",
  },
  TextButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignUp;
