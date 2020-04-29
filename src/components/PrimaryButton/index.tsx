import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export default function PrimaryButton({title, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgrey',
    padding: 10,
    width: '50%',
    borderRadius: 5,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
