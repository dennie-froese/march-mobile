import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Account from 'components/Account';

export default function Transactions({route}) {
  const {accountType} = route.params;
  return (
    <View style={styles.transactionsContainer}>
      <Account accountType={accountType} disabled />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
});
