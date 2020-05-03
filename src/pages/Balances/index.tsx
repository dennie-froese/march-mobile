import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import AccountContainer from 'components/AccountContainer';

export default function Balances({navigation}) {
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
  buttonContainer: {
    alignItems: 'center',
  },
});