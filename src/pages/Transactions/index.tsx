import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Account from 'components/Account';
import FurtherAccountDetails from 'components/FurtherAccountDetails';

export default function Transactions({route}) {
  const {accountType} = route.params;
  return (
    <View style={styles.transactionsContainer}>
      <Account accountType={accountType} disabled />
      <FurtherAccountDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
});
