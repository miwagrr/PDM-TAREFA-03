import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground, View, StyleSheet } from 'react-native';
import React from 'react';
import FilmesScreen from './view/filmeView';

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground 
        source={{uri: 'https://4kwallpapers.com/images/wallpapers/dune-2-2024-movies-1242x2208-13967.jpg'}}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <FilmesScreen />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
