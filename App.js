import {NavigationContainer} from '@react-navigation/native';
import MyStack from "./screens/MyStack";
import Forgotpass from './screens/Forgotpass';
import { View } from 'react-native';
import Verifyotp from './screens/Verifyotp';
import Resetpassword from './screens/Resetpassword';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';




export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    // <View>
    //   <SignIn />
    // </View>
  );
}