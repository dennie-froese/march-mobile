import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Transaction() {
  return (
    <View style={styles.transactionContainer}>
      <Text> Transaction 1</Text>
      <Text> Value</Text>
      <Text> Day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
