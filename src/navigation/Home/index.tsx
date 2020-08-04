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
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Balances') {
            return <Lock width={20} height={20} />;
          } else if (route.name === 'Settings') {
            return <Mail width={20} height={20} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colours.grey,
        inactiveTintColor: colours.pink,
      }}>
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
