import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Transaction from 'components/Transaction';

export default function TransactionsList() {
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
