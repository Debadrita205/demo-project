import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {LoaderProps} from './Types';

const Loader = (props: LoaderProps) => {
  return (
    <View style={styles.loaderStyles}>
      <ActivityIndicator
        size={props.size ? props.size : 'large'}
        color={props.color ? props.color : '#fff'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    backgroundColor: '#00000000',
    zIndex: 150,
  },
});

export default Loader;
