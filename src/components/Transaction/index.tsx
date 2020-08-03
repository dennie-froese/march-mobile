import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Transaction() {
  return (
    <>
      <View style={styles.transactionContainer}>
        <Text>Fri 31</Text>
        <View style={styles.bottomContainer}>
          <Text style={{fontWeight: 'bold'}}>Lisa Henderson</Text>
          <Text>-£256.99</Text>
        </View>
      </View>
      <View style={styles.transactionContainer}>
        <Text>Tue 4</Text>
        <View style={styles.bottomContainer}>
          <Text style={{fontWeight: 'bold'}}>George Hewitt</Text>
          <Text>-£56.50</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});
