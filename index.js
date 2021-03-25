import React, { useEffect } from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import SplashScreen from  "react-native-splash-screen";

const Apps = () => {
    useEffect(() => {
        SplashScreen.hide();
    })

    return <App />
}

AppRegistry.registerComponent(appName, () => Apps);
