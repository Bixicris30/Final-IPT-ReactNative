import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';

export default class LogoutScreen extends React.Component {

    render() {
        return (

            <LinearGradient style={styles.container}
                colors={["#FBD3E9", "#BB377D"]}>
                <View style={styles.name}>
                    <Image source={require('./assets/images/logo.png')} />
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 180 }}>


                    <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', fontSize: 16, top: 20 }}>You've successfully signed out.</Text>
                    <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', fontSize: 16, top: 20 }}>See you soon!</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={{ width: 200, height: 50, backgroundColor: '#7A5C58', alignItems: 'center', justifyContent: 'center', top: 60, borderRadius: 15, marginBottom: 20, borderWidth: 1, borderColor: '#000000' }}
                    >
                        <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>Back to Login</Text>
                    </TouchableOpacity>

                </View>

            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        width: 470,
        top: 10
    }
});