import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'pages/Login';
import Onboarding from 'pages/Onboarding';
import SignUp from 'pages/SignUp';

import {colours} from 'config/Theme';
import {StatusBar} from 'react-native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack/lib/typescript/src/types';

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
          options={{
            title: '',
            headerLeft: (props: StackHeaderLeftButtonProps) => null,
          }}
        />
        <AuthenticationStack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: ''}}
        />
        <AuthenticationStack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: ''}}
        />
      </AuthenticationStack.Navigator>
    </>
  );
}
