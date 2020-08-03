import React from 'react';
import AuthenticationNavigator from 'navigation/Authentication';
import {createStackNavigator} from '@react-navigation/stack';
import BalancesNavigator from './navigation/Balances';
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
        <AppStack.Screen name="Balances" component={BalancesNavigator} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
