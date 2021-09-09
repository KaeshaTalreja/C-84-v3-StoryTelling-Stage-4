import * as React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
        {
          //<BottomTabNavigator /> without the drawer thing
        }
      </NavigationContainer>
    );
  }
}
