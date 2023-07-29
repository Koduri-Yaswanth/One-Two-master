import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { db, firebase } from "../firebaseConfig";
import { Button } from "react-native";

function Mainscreen() {
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailVerified, setemailVerified] = useState(false);
  useEffect(() => {
    userVerificaton()
  }, [db]);

  useEffect(() => {
    if (emailVerified) {
     userData()
    }
  }, [name]);
  
const userVerificaton=async() => {
    const userVerified = firebase.auth().currentUser.emailVerified;
    setemailVerified(userVerified);
    
}
const userData=async() => {
    await firebase
        .firestore()
        .collection("Users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            setName(snapshot.data().fName);
          } else {
            console.log("User does not exist");
          }
        });
    
}
  return (
    <SafeAreaView style={styles.container}>
      
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Hello, {name}
          </Text>
          <TouchableOpacity onPress={() => { firebase.auth().signOut(); }} style={styles.button}>
            <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
              Signout
            </Text>
          </TouchableOpacity>
        </View>
      {/* ) : (
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>Email is not Verified</Text>
            <TouchableOpacity>
              <Text style={{color:'white'}}>check Mail</Text>
            </TouchableOpacity>
        </View>
      ) */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "black",
  },
  button: {
    marginTop: 50,
    height: 70,
    width: 250,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
export default Mainscreen;
