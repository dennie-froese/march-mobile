import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');

  function logon() {
    //some user auth logic

    navigation.navigate('Balances');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.text}>Welcome to BanKing!</Text>
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.text}>User name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUser(text)}
            value={user}
            placeholder={'Enter your user name'}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUser(text)}
            value={user}
            placeholder={'Enter your password'}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton title="Log on!" onPress={logon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
