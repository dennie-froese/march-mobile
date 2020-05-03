import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import {tsConditionalType} from '@babel/types';

export default function FurtherAccountDetails() {
  const [state, setState] = useState<
    null | 'growing' | 'doneGrowing' | 'shrinking' | 'doneShrinking'
  >(null);
  const height = useRef(new Animated.Value(0));
  const dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var today = new Date();
  var day = today.getDay();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  useEffect(() => {
    if (state === 'growing') {
      Animated.timing(height.current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.linear),
      }).start(() => {
        setState('doneGrowing');
      });
    }
    if (state === 'shrinking') {
      Animated.timing(height.current, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.linear),
      }).start(() => {
        setState('doneShrinking');
      });
    }
  }, [state]);

  return (
    <View>
      <View style={styles.furtherAccountDetails}>
        <Text style={styles.furtherAccountDetailsText}>
          Further account details
        </Text>
        <TouchableOpacity
          onPress={() => {
            if (state === 'doneGrowing') {
              setState('shrinking');
            } else {
              setState('growing');
            }
          }}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>
      {state === 'growing' ||
      state === 'doneGrowing' ||
      state === 'shrinking' ? (
        <Animated.View
          style={{
            ...styles.animatedView,
            ...{transform: [{scaleY: height.current}]},
          }}>
          <Text>Balance at</Text>
          <Text>{`${dayList[day]}, ${hours}:${minutes}`}</Text>
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  furtherAccountDetails: {
    paddingLeft: 10,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  furtherAccountDetailsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  animatedView: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});