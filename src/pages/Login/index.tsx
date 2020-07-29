import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function logon() {
    //some user auth logic

    navigation.navigate('Balances');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Welcome to BanKing!</Text>
          <Text style={styles.textSubheader}>
            Use your credentials below and logon to your account
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setUser(text)}
            value={user}
            placeholder={'Enter your user name'}
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
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
    width: '90%',
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    textAlign: 'center',
    width: 300,
  },
  textHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textSubheader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'grey',
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
