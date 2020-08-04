import 'react-native-gesture-handler';
import React, {useCallback} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';

export default function Settings() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingTop: 10,
  },
});
