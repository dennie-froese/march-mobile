import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {}

export default function TextInput({}: Props) {
  return (
    <View>
      <RNTextInput />
    </View>
  );
}

const styles = StyleSheet.create({});
