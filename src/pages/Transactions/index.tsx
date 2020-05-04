import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Account from 'components/Account';
import FurtherAccountDetails from 'components/FurtherAccountDetails';
import TransactionsList from 'components/TransactionsList';

export default function Transactions({route}) {
  const {accountType} = route.params;
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Account accountType={accountType} disabled />
        <FurtherAccountDetails />
      </View>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsHeaderText}>Transactions</Text>
      </View>
      <TransactionsList />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'white',
  },
  topContainer: {
    padding: 10,
  },
  transactionsHeader: {
    backgroundColor: 'grey',
    padding: 10,
  },
  transactionsHeaderText: {
    fontSize: 16,
  },
});
