import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  navigation;
  accountType: string;
}

export default function AccountContainer({navigation, accountType}: Props) {
  return (
    <View style={styles.baseContainer}>
      <View style={styles.accountContainer}>
        <TouchableOpacity style={styles.accountHeader}>
          <Text style={styles.accountType}>{accountType}</Text>
          <Text>33-20-44</Text>
          <Text>45238934</Text>
        </TouchableOpacity>
        <View style={styles.accountBalances}>
          <View style={styles.accountDetails}>
            <Text>Arranged Overdraft:</Text>
            <Text>Available Balance:</Text>
          </View>
          <View style={styles.accountValues}>
            <Text style={styles.textValue}>£200.10</Text>
            <Text>£2,000.00</Text>
            <Text>£200.10</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    padding: 10,
  },
  accountContainer: {
    backgroundColor: 'white',
  },
  accountHeader: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderBottomWidth: 2,
    padding: 10,
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  accountType: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  accountBalances: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountDetails: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 10,
  },
  accountValues: {
    alignItems: 'flex-end',
    padding: 10,
  },
  textValue: {
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 20,
  },
});
