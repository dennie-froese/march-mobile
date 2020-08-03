import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack/lib/typescript/src/types';
import Balances from 'pages/Balances';
import Transactions from 'pages/Transactions';
import {colours} from 'config/Theme';
import {StatusBar} from 'react-native';

const BalancesStack = createStackNavigator();

export default function BalancesNavigator() {
  return (
    <>
      <StatusBar backgroundColor={colours.primary} />
      <BalancesStack.Navigator
        initialRouteName="Balances"
        screenOptions={{
          headerStyle: {
            backgroundColor: colours.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <BalancesStack.Screen
          name="Balances"
          component={Balances}
          options={{
            headerLeft: (props: StackHeaderLeftButtonProps) => null,
            title: '',
          }}
        />
        <BalancesStack.Screen name="Transactions" component={Transactions} />
      </BalancesStack.Navigator>
    </>
  );
}
