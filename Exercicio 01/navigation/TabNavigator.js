import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from './StackNavigator';
import GatoScreen from '../view/GatoScreen';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a1a2e',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#CC6A00',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ focused, color, size }) => {
          let nomeIcone;
          if (route.name === 'App') {
            nomeIcone = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Gato') {
            nomeIcone = focused ? 'paw' : 'paw-outline';
          }
          return <Ionicons name={nomeIcone} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="App"
        component={StackNavigator}
        options={{ tabBarLabel: 'WatchList' }}
      />
      <Tab.Screen
        name="Gato"
        component={GatoScreen}
        options={{ tabBarLabel: 'Gato' }}
      />
    </Tab.Navigator>
  );
}
