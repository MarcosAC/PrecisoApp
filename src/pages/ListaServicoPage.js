import React from 'react';
import { 
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

import NavigationBar from '../components/NavigationBar';

function ListaServicoPage({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <NavigationBar Title="Lista de Serviços" />

            <View style={styles.container}>
                <FlatList
                    data={[
                        {
                            Key: '1',
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        },
                        {
                            Titulo: 'Troca Chuveiro',
                            Descricao: 'Trocar chuveiro queimado',
                            Contato: '31 9 9999-9999'
                        }
                    ]}
                    renderItem={
                        ({item}) =>
                            <View style={styles.frame}>
                                <Text style={styles.itemTitle}>{item.Titulo}</Text>
                                <View style={{borderWidth: 1, borderColor: '#C5C5C5', }} /> 

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.item}>Contato:</Text>
                                    <Text style={styles.item}>{item.Contato}</Text>
                                </View>                               
                                
                                <Text style={styles.item}>{item.Descricao}</Text>
                            </View>                                 
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    frame: {
        padding: 5,
        borderRadius: 10,
        borderColor: '#C5C5C5',
        borderWidth: 2,        
        marginTop: 10,
        marginVertical: 10,
        marginHorizontal: 15
    },

    item: {
        padding: 10,
        fontSize: 16
    },

    itemTitle: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ListaServicoPage;