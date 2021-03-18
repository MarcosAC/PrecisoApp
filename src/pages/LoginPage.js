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
                underlineColorAndroid="black"                
                // value={this.state.email}
                // onChangeText={email => this.setState({email})}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"                
                secureTextEntry={true}
                underlineColorAndroid="black" 
                // value={this.state.password}
                // onChangeText={password => this.setState({password})}
            />

            <TouchableHighlight style={styles.buttom} underlayColor={'#91b7ff'} onPress={() => navigation.navigate('CadastroProfissionalPage')} >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttom} underlayColor={'#91b7ff'} onPress={() => navigation.navigate('CadastroProfissionalPage')}>                
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableHighlight>

            <TouchableOpacity style={styles.buttonTransparent} onPress={() => navigation.navigate('CadastroProfissionalPage')}>
                <Text style={styles.buttonTransparentText}>Criar Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTransparent} onPress={() => navigation.navigate('CadastroProfissionalPage')}>
                <Text style={styles.buttonTransparentText}>Esqueci a senha!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15      
    },    

    input: {
        marginTop: 20,
        width: '100%',
        fontSize: 18
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

    buttonTransparent: {
        padding: 5
    },

    buttonTransparentText: {
        fontSize: 16,
        textAlign: 'center'
    },
})

export default LoginPage;