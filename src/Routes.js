import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import NavigationBar from './components/NavigationBar';
import LoginPage from './pages/LoginPage';
import CadastroProfissionalPage from './pages/CadastroProfissionalPage';
import ListaServicoPage from './pages/ListaServicoPage';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='LoginPage' component={LoginPage} />
      <Stack.Screen name='NavigationBar' component={NavigationBar} />
      <Stack.Screen 
        name='CadastroProfissionalPage'
        component={CadastroProfissionalPage}
        options= {{ title: 'Cadastro' }} />

      <Stack.Screen
        name='ListaServicoPage'
        component={ListaServicoPage} />
    </Stack.Navigator>
  );
};

export default Routes;