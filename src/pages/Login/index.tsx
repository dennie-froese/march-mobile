import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <PrimaryButton
        title="Log on!"
        onPress={() => navigation.navigate('Balances')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    paddingTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
