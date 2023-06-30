import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import Mainscreen from '../Home/Mainscreen';
import { createStackNavigator } from '@react-navigation/stack';
import Forgotpass from './Forgotpass';
import Verifyotp from './Verifyotp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Mainscreen" component={Mainscreen} />
      <Stack.Screen name="Forgotpass" component={Forgotpass} options={{headerShown:false}} />
      <Stack.Screen name="Verifyotp" component={Verifyotp} />
    </Stack.Navigator>
  );
}

export default MyStack