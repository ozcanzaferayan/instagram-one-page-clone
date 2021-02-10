import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const screenWidth = Dimensions.get('screen').width;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{
        width: screenWidth > 400 ? 400 : '100%',
        alignSelf: 'center'
      }}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
