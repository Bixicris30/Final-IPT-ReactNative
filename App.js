import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import SignupScreen from './SignupScreen';
import RegisteredScreen from './RegisteredScreen';
import LogoutScreen from './LogoutScreen';

const Stack = createStackNavigator();

 const App = ()=>{
 
    return(
      <View style= {styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Register" component={RegisteredScreen} />
            <Stack.Screen name="Logout" component={LogoutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
}


export default App;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF'
  }
})