import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FurtherAccountDetails() {
  return (
    <View style={styles.furtherAccountDetails}>
      <Text style={styles.furtherAccountDetailsText}>
        Further account details
      </Text>
      <TouchableOpacity>
        <Text>Show</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  furtherAccountDetails: {
    paddingLeft: 10,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  furtherAccountDetailsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
