import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ImageBackground, View, StyleSheet } from 'react-native';
import React from 'react';
import FilmesScreen from './view/filmeView';

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground 
        source={{uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlM19yb3dzX29mX2VtcHR5X3JlZF9zZWF0c19pbl9jaW5lbWFfZWVhNDA4NGItMTEwNC00MjY2LWE0NjctOTlhZDI5MTRkODQ5LWIuanBn.jpg'}}
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
