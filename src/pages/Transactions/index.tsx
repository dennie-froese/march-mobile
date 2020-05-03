import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export default function Transactions({route, navigation}) {
  const {accountTypes} = route.params;
  return (
    <View style={styles.transactionsContainer}>
      <Text>{accountTypes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionsContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
});
