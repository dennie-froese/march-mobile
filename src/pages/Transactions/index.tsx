import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';

export default function Transactions({navigation}) {
  return (
    <View>
      <Text style={styles.text}>This is the transactions page!</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Go back to home!"
          onPress={() => navigation.navigate('Balances')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
