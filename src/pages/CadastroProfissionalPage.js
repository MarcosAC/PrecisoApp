import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import NavigationBar from '../components/NavigationBar';

function CadastroProfissionalPage({ navigation }) {
    const [value, setValue] = React.useState();

    return (
        <View style={styles.container}>
            <NavigationBar Title="Cadastro" />

            <ScrollView>
                <View style={{ padding:15, flex:1 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"                
                        autoFocus={true}
                        underlineColorAndroid="black"                
                        // value={this.state.email}
                        // onChangeText={email => this.setState({email})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"                
                        secureTextEntry={true}
                        underlineColorAndroid="black" 
                        // value={this.state.password}
                        // onChangeText={password => this.setState({password})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Celular"
                        underlineColorAndroid="black"                
                        // value={this.state.email}
                        // onChangeText={email => this.setState({email})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereco"                
                        secureTextEntry={true}
                        underlineColorAndroid="black" 
                        // value={this.state.password}
                        // onChangeText={password => this.setState({password})}
                    />

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.input}>Tipo Profissional</Text>

                        <Picker
                            selectedValue={value}
                            onValueChange={(itemValue, itemIndex) =>
                                setValue(itemValue)
                            }>
                            <Picker.Item label="Eletricista" value="Eletricista" />
                            <Picker.Item label="Bombeiro Hidráulico" value="Bombeiro Hidráulico" />
                        </Picker>
                    </View>                    

                    <TextInput
                        style={styles.input}
                        placeholder="FormaPagamento"  
                        underlineColorAndroid="black"                
                        // value={this.state.email}
                        // onChangeText={email => this.setState({email})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"                
                        secureTextEntry={true}
                        underlineColorAndroid="black" 
                        // value={this.state.password}
                        // onChangeText={password => this.setState({password})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"                
                        secureTextEntry={true}
                        underlineColorAndroid="black" 
                        // value={this.state.password}
                        // onChangeText={password => this.setState({password})}
                    />
                    
                    <TouchableHighlight 
                        style={styles.buttom} 
                        underlayColor={'#91b7ff'} 
                        onPress={
                            () => 
                            navigation.navigate('CadastroProfissionalPage')
                        }>

                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        style={styles.buttom} 
                        underlayColor={'#91b7ff'}
                        onPress={
                            () => navigation.navigate('CadastroProfissionalPage')
                        }>   
                                     
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>        
    );
}
    
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //padding: 15      
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
    }
})

export default CadastroProfissionalPage;
