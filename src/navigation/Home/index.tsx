import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BalancesNavigator from 'navigation/Balances';
import Settings from 'pages/Settings';

const Home = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Home.Navigator headerMode="none">
      <Home.Screen
        name="Balances"
        component={BalancesNavigator}
        options={{
          title: '',
        }}
      />
      <Home.Screen
        name="Settings"
        component={Settings}
        options={{
          title: '',
        }}
      />
    </Home.Navigator>
  );
}
