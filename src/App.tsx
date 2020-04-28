import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>New empty start</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
