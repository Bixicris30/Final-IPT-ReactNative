import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        username: "",
        password: "",
        errMsg: ""
    }

    onLogin = () => {
        if (this.state.username == 'abe' && this.state.password == 'pretty') {
            this.props.navigation.navigate('Main')
        } else {
            this.validateInput.current.shake(800)
            this.setState({ errMsg: 'Invalid login details. Try again!' })
        }
    }

    onLogin = () => {
        if (this.state.username == 'abe' && this.state.password == 'pretty') {
            this.props.navigation.navigate('Main')
        } else {
            this.validateInput.current.shake(800)
            this.setState({ errMsg: 'Invalid login details. Try again!' })
        }
    }

    render() {
        return (
            <LinearGradient style={styles.container}
                colors={["#FBD3E9", "#BB377D"]}>

                <Animatable.View
                    ref={this.validateInput}
                >
                    <Text>Email address</Text>
                    <Icon name="envelope-o" size={20} color="#ccc" style={{ position: 'absolute', top: 45, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ username: text })
                        }
                        }
                    />
                    <Text>Username</Text>
                    <Icon name="user" size={20} color="#ccc" style={{ position: 'absolute', top: 135, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Password</Text>
                    <Icon name="question" size={20} color="#ccc" style={{ position: 'absolute', top: 225, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>First Name</Text>
                    <Icon name="user" size={20} color="#ccc" style={{ position: 'absolute', top: 318, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Last Name</Text>
                    <Icon name="user" size={20} color="#ccc" style={{ position: 'absolute', top: 407, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Birthdate</Text>
                    <Icon name="birthday-cake" size={20} color="#ccc" style={{ position: 'absolute', top: 497, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        placeholder="         dd/mm/yyyy"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text>Gender</Text>
                    <Icon name="genderless" size={20} color="#ccc" style={{ position: 'absolute', top: 585, left: 20 }} />
                    <TextInput
                        style={styles.fields}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ password: text })
                        }
                        }
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>



                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => alert('HEHE')}
                        style={{ width: 200, backgroundColor: '#FFC0CB', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, borderWidth: 1, borderColor: '#000000' }}
                    >
                        <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16 }}>Register</Text>


                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.login}
                    >
                        <Text style={{ textAlign: 'center', color: '#000000', fontSize: 16, marginBottom: 30, }}>Already have an account? Login.</Text>
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
    fields: {
        height: 45,
        width: 300,
        borderColor: 'white',
        borderWidth: 1,
        padding: 13,
        margin: 13,
    },

});