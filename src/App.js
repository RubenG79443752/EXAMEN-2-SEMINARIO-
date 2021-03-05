/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Color from './layout/colors.js'
import CreateUser from './views/CreateUser.js'
import Listuser from './views/ListUser.js'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  listUser() {
    return <Listuser/>;
  }
  createUser(){
    return <CreateUser/>;
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Crear Usuarios" component={this.createUser} />
          <Tab.Screen name="Listar Tareas" component={this.listUser} />
        </Tab.Navigator>
      </NavigationContainer>
    );

  }
}

export default App;
