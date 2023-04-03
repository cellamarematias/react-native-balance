import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Tareas from '../screens/Tareas';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ffff',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Tareas} />
    </Tab.Navigator>
  );
}