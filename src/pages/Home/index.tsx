import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>New empty start</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Go to the detail page!"
          onPress={() => {
            console.warn('clicked');
          }}
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
