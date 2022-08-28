import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullscreen: {
    fles: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
