import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

function NavigationBar({ Title }) {
    const navigation = useNavigation();

    return (       
        <View style={styles.container}>
            <TouchableHighlight
                onPress={
                    () => navigation.navigate('LoginPage')
                }>

                <Icon name="arrow-back" size={28} color="#fff" />
            </TouchableHighlight>
            
            <Text style={styles.title}>{Title}</Text>                
        </View>       
    );    
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0084f7'
    },

    title: {
        fontSize: 22,
        marginLeft: 10,
        color: '#fff'
      },
});

export default NavigationBar;