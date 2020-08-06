import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import {colours, spacing, borderRadii} from 'config/Theme';
import Lock from 'icons/Lock';
import Mail from 'icons/Mail';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function logon() {
    //some user auth logic
    // setError for wrong credentials
    // if (user === 'dennie' && password === '12345') {
    setError(false);
    navigation.navigate('Home');
    // } else {
    //   setError(true);
    // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>
            Welcome back to BanKing, good to see you again!
          </Text>
          <Text style={styles.textSubheader}>
            Use your credentials below and logon to your account
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: error ? colours.danger : 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <Mail width={20} height={20} />
            <TextInput
              style={{
                textAlign: 'left',
                width: 250,
              }}
              onChangeText={text => setUser(text)}
              value={user}
              placeholder={'Enter your user name'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: error ? colours.danger : 'black',
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 20,
            }}>
            <Lock width={20} height={20} />
            <TextInput
              style={{
                textAlign: 'left',
                width: 250,
              }}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder={'Enter your password'}
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Log in to your account!"
          onPress={logon}
          colourText={colours.white}
          colourBG={colours.primary}
          spacing={spacing.m}
          borderRadius={borderRadii.xl}
        />
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
