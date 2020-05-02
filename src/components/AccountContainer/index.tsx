import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Account from 'components/Account';

interface Props {
  accountType: string;
}

export default function AccountContainer({accountType}: Props) {
  return (
    <View style={styles.baseContainer}>
      <View style={styles.accountContainer}>
        <Account accountType={accountType} />
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
});
