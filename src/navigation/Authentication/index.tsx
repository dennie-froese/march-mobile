import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack/lib/typescript/src/types';
import Login from 'pages/Login';
import Onboarding from 'pages/Onboarding';
import Balances from 'pages/Balances';
import Transactions from 'pages/Transactions';
import {colours} from 'config/Theme';
import {StatusBar} from 'react-native';

const AuthenticationStack = createStackNavigator();

export default function AuthenticationNavigator() {
  return (
    <>
      <StatusBar backgroundColor={colours.primary} />
      <AuthenticationStack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: colours.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <AuthenticationStack.Screen
          name="Login"
          component={Login}
          options={{title: ''}}
        />
        <AuthenticationStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: ''}}
        />
      </AuthenticationStack.Navigator>
    </>
  );
}
