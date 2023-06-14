import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class HomeScreen extends React.Component {

  render() {

    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    })

    return (
      <LinearGradient style={styles.container}
        colors={["#FBD3E9", "#BB377D"]}>


        <Text style={styles.hello}>Welcome to,</Text>
        <View style={styles.image}>
          <Image source={require('./assets/images/remove.png')} />
          </View>
        

        <View style={{ flexDirection: 'row', margin: 50, paddingVertical: 20 }}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.login}
            
          >
            <Text style={styles.loginText}>      Next  ➡</Text>
          </TouchableOpacity>

        </View>

      </LinearGradient>
    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  hello: {
    fontSize: 20,
    marginTop: 280,
    right: 140,
    top: 50

  },
  login: {
    padding: 10,
    width: 150,
    borderRadius: 50,
    marginHorizontal: 2,
    marginBottom: 300,
    bottom: 330,
    left: 100
  },
  loginText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
  },
  image: {
    height: 20,
    width: 500, 
    margin: 10,

  }

});