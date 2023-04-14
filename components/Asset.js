import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 256,
    marginBottom: 30
  }
});
