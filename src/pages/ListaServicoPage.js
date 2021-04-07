import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import NavigationBar from '../components/NavigationBar';

function ListaServicoPage({ navigation }) {
    return (
        <View style={styles.container}>
            <NavigationBar Title="Lista de Serviços" />
            
            <Text>Pagina Lista</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default ListaServicoPage;