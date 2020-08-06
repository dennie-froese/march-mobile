import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';
import {colours, spacing, borderRadii} from 'config/Theme';
import Lock from 'icons/Lock';
import Mail from 'icons/Mail';
import {useNavigation} from '@react-navigation/core';
import {
  useStateUser,
  useStatePassword,
  useSetUser,
  useSetPassword,
} from 'hooks/useState';

export default function SignUp() {
  const navigation = useNavigation();
  const user = useStateUser();
  const password = useStatePassword();
  // const setUser = useSetUser();
  const setPassword = useSetPassword();
  const [userTemp, setUserTemp] = useState(user);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);

  console.warn(user);

  function logon() {
    //some user auth logic
    // setError for wrong credentials
    if (user.length > 0 && password1.length > 0 && password1 === password2) {
      setError(false);
      navigation.navigate('Login');
    } else {
      setError(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.textHeader}>Almost there!</Text>
          <Text style={styles.textSubheader}>
            Please enter a secure password below
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
              // onChangeText={text => setUser(text)}
              value={user}
              placeholder={'Enter your user email address'}
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
              onChangeText={text => setPassword1(text)}
              value={password1}
              placeholder={'Enter your password'}
              secureTextEntry
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
              onChangeText={text => setPassword2(text)}
              value={password2}
              placeholder={'Confirm password'}
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          title="Finish registration and log in!"
          onPress={logon}
          colourText={colours.white}
          colourBG={colours.primary}
          spacing={spacing.m}
          borderRadius={borderRadii.xl}
        />
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{textDecorationLine: 'underline'}}>
            I already have an account!
          </Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
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
