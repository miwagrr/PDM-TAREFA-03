import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from '../view/ListaScreen';
import AdicionarScreen from '../view/AdicionarScreen';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#CC6A00' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: 'rgba(245, 245, 245, 0.50)' },
      }}
    >
      <Stack.Screen
        name="Lista"
        component={ListaScreen}
        options={{ title: 'Minha WatchList' }}
      />
      <Stack.Screen
        name="Adicionar"
        component={AdicionarScreen}
        options={{ title: 'Adicionar Filme' }}
      />
    </Stack.Navigator>
  );
}
