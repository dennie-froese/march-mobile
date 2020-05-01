import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PrimaryButton from 'components/PrimaryButton';

export default function Detail({navigation}) {
  return (
    <View>
      <Text style={styles.text}>This is the detail page!</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Go back to home!"
          onPress={() => navigation.navigate('Home')}
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
