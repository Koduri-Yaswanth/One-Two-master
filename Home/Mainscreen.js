import React, {useState, useEffect} from "react";
import { View,Text,StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { firebase } from '../firebaseConfig';


function Mainscreen(){

    const [name, setName] = useState('')
    const [fullname, setFullname] = useState('')
    
    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else{
                console.log('User does not exist')
            }
        })
    }, [name])
    
    


    return(
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                Hello, {name}
            </Text>
            <TouchableOpacity onPress={() => {firebase.auth().signOut()}} style={styles.button}>
                <Text style={{color:'white', fontSize:22, fontWeight:'bold'}}>
                    Signout
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop: 100,
        backgroundColor:'black'
    },
    button :{
        marginTop:50,
        height:70,
        width:250,
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
});
export default Mainscreen;