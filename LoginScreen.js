import * as React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }
    state = {
        username: "",
        password: "",
        errMsg: ""
    }

    // onLogin = () => {
    //     if (this.state.username == 'abe' && this.state.password == 'pretty') {
    //         this.props.navigation.navigate('Main')
    //     } else {
    //         this.validateInput.current.shake(800)
    //         this.setState({ errMsg: 'Invalid login details. Try again!' })
    //     }
    // }

    onLogin = async () => {
        //GET request
        const payload = {
            username: this.state.username,
            password: this.state.password
          }
        fetch('http://127.0.0.1:8000/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(payload)

        }).then((response) =>{
            if(response.status===200){
               this.props.navigation.navigate('Main')
            }
             return response.json()}
        )
        .then((responseJson) => {
            alert(JSON.stringify(responseJson))
             AsyncStorage.setItem('token',JSON.stringify(responseJson) )
          })
        .catch((error) => {
            alert(JSON.stringify(error));
        });
    };

  
    
    getUser = async () => {
        const storage = await AsyncStorage.getItem('token');
        const token = JSON.parse(storage).token
      //GET request
      fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`,
          }
      })
        .then((response) => {
            if(response.status===200){
               this.props.navigation.navigate('Main')
            }
            return response.json()
        })
        .then((responseJson) => {
          alert(JSON.stringify(responseJson));
        })
        .catch((error) => {
          alert(JSON.stringify(error));
         
  
        });
    };
  
    componentDidMount() {
        this.getUser();
      }
    render() {
        return (

            <LinearGradient style={styles.container}
                colors={["#FBD3E9", "#BB377D"]}>
                <Image source={require('./assets/images/remove.png')} />
                <View style={styles.image}>
                <Image source={require('./assets/images/l.png')} />
                </View>
                <Animatable.View
                    ref={this.validateInput}
                >
                    <Text>Email</Text>
                    <Icon name="envelope-o" size={20} color="#ccc" style={{ position: 'absolute', top: 45, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' })
                            this.setState({ username: text })
                        }
                        }
                    />
                    <Text>Password</Text>
                    <Icon name="lock" size={20} color="#ccc" style={{ position: 'absolute', top: 135, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }

                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 80 }}>
                    <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ width: 200, height: 50, backgroundColor: '#7A5C58', alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginBottom: 10, borderWidth: 1, borderColor: '#000000' }}
                    >
                        <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >
                        <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16 }}>Don't have an account? Sign up.</Text>
                    </TouchableOpacity>



                    <View style={{ flexDirection: 'row', marginBottom: 50 }}>
                        <View style={styles.f}>
                            <Text style={styles.fText}>f</Text>
                        </View>
                        <View style={styles.g}>
                            <Text style={styles.gText}>G</Text>
                        </View>
                        <View style={styles.in}>
                            <Text style={styles.inText}>in</Text>
                        </View>
                    </View>

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
    f: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#3f51b5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    g: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#f44336',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    in: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    fields: {
        height: 45,
        width: 300,
        borderColor: 'white',
        borderWidth: 4,
        padding: 13,
        margin: 12,
    },
    image: {
        right: 120,
        height: 50,
    }
});