import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import SplashScreen from  "react-native-splash-screen";
import storeConfig from './src/store/storeConfig/storeConfig';

const store = storeConfig();

const Apps = () => {
    useEffect(() => {
        SplashScreen.hide();
    })

    return <Provider store={store}>
                <App />
            </Provider>
}

AppRegistry.registerComponent(appName, () => Apps);
