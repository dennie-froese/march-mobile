import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BalancesNavigator from 'navigation/Balances';
import Settings from 'pages/Settings';
import Lock from 'icons/Lock';
import Mail from 'icons/Mail';
import {colours} from 'config/Theme';
import {View} from 'react-native';

const Home = createBottomTabNavigator();

export default function HomeNavigator() {
  return (
    <Home.Navigator
      tabBarOptions={{
        activeTintColor: colours.primary,
        inactiveTintColor: colours.secondary,
        tabStyle: {paddingTop: 5},
        allowFontScaling: true,
        labelStyle: {fontSize: 16, padding: 5},
        style: {
          height: 60,
          borderTopColor: colours.primary,
          borderTopWidth: 4,
        },
      }}>
      <Home.Screen
        name="Balances"
        component={BalancesNavigator}
        options={{
          tabBarIcon: props => <Lock width={20} height={20} />,
        }}
      />
      <Home.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => <Lock width={20} height={20} />,
        }}
      />
    </Home.Navigator>
  );
}
