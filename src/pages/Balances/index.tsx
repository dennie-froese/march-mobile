import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';
import AccountContainer from 'components/AccountContainer';
import {useFocusEffect} from '@react-navigation/core';

export default function Balances() {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Exit App',
          'Exiting the application?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <View>
      <Text style={styles.text}>Please find your account balances below:</Text>
      <AccountContainer accountType="Current Account" />
      <AccountContainer accountType="Savings Account" />
      <AccountContainer accountType="Investment Account" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingTop: 10,
  },
});
