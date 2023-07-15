import {NavigationContainer} from '@react-navigation/native';
import MyStack from "./screens/MyStack";
import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from "./firebaseConfig";
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Forgotpass from './screens/Forgotpass';
import Mainscreen from './Home/Mainscreen';
import Verifyotp from './screens/Verifyotp';

const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false); 
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user){
    return(
      <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Forgotpass" component={Forgotpass} options={{headerShown:false}} />
      </Stack.Navigator>
  );
}

return(
  <Stack.Navigator>
    <Stack.Screen name="Mainscreen" component={Mainscreen} />
  </Stack.Navigator>
);
}

export default () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}