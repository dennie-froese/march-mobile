import React from 'react';
import AuthenticationNavigator from 'navigation/Authentication';
import HomeNavigator from 'navigation/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen
          name="Authentication"
          component={AuthenticationNavigator}
        />
        <AppStack.Screen name="Home" component={HomeNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
