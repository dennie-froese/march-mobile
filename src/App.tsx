import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'pages/Login';
import Balances from 'pages/Balances';
import Transactions from 'pages/Transactions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Balances" component={Balances} />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
