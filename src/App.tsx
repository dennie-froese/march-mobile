import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack/lib/typescript/src/types';
import Login from 'pages/Login';
import Balances from 'pages/Balances';
import Transactions from 'pages/Transactions';
import {colours} from 'config/Theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: colours.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Login" component={Login} options={{title: ''}} />
        <Stack.Screen
          name="Balances"
          component={Balances}
          options={{headerLeft: (props: StackHeaderLeftButtonProps) => null}}
        />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
