import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function GatoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/DrFIVd7.png' }}
        style={styles.imagem}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  imagem: {
    width: 500,
    height: 900,
  },
});
