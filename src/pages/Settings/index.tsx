import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';
import {useStateUser} from 'hooks/useState';

export default function Settings() {
  const user = useStateUser();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  return (
    <View>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.text}>Hello {user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingTop: 10,
  },
});
