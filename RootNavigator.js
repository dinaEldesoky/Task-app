import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import LoginForm from './LoginForm';

import { createDrawerNavigator } from 'react-navigation-drawer';
const RootNavigator = createDrawerNavigator({
  Login: {
    screen: LoginForm,
  },
  Home: {
    screen: Home,
    navigationOptions: {},
  },
});

export default createAppContainer(RootNavigator);
