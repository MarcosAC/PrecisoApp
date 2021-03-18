import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './pages/LoginPage';
import CadastroProfissionalPage from './pages/CadastroProfissionalPage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginPage' component={LoginPage}/>
      <Stack.Screen 
        name='CadastroProfissionalPage'
        component={CadastroProfissionalPage}
        options= {{ title: 'Cadastro' }} />
    </Stack.Navigator>
  );
};

export default Routes;