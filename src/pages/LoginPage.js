import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

function LoginPage({ navigation }) {
    return (
        <View>
            <Button
                title="Press me"
                onPress={() => navigation.navigate('CadastroProfissionalPage')}
            />
        </View>
    );
}

export default LoginPage;