import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"                
                autoFocus={true}
                keyboardType="email-address"
                // value={this.state.email}
                // onChangeText={email => this.setState({email})}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"                
                secureTextEntry={true}
                // value={this.state.password}
                // onChangeText={password => this.setState({password})}
            />

            <TouchableHighlight style={styles.buttom} underlayColor={'#91b7ff'} onPress={() => navigation.navigate('CadastroProfissionalPage')} >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttom} underlayColor={'#91b7ff'} onPress={() => navigation.navigate('CadastroProfissionalPage')}>                
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15      
    },

    buttom: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#0084f7'
    },

    buttonText: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center'
    },

    input: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    },
})

export default LoginPage;