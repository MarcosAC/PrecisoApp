import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}
