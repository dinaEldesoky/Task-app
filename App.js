import * as React from 'react';
import { Text, View , AppRegistry } from 'react-native';
import Constants from 'expo-constants';

// import from local files
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RootNavigator from './components/RootNavigator';
import App1 from './components/App1';


export default App1;
AppRegistry.registerComponent('Assets',()=>App1);


