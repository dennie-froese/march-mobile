import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text style={styles.text}>New empty start</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Please click me!"
            onPress={() => {
              console.warn('clicked');
            }}
          />
        </View>
      </View>
    </>
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
