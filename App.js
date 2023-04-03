import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//RTK
import { store } from './src/redux/store.js';
import { Provider } from 'react-redux';

import Home from './src/screens/Home.tsx';
import Tareas from './src/screens/Tareas.tsx';
import Login from './src/screens/Login.tsx';
import LogOut from './src/screens/Logout.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: '#DF2E38',
        tabBarStyle: {
          borderTopWidth: 0
        }
      }} >
        <Tab.Screen name="Gastos" component={Home} options={{
          tabBarLabel: 'Gastos',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="home" color={focused ? 'red' : 'grey'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Tareas" component={Tareas} options={{
          tabBarLabel: 'Tareas',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={focused ? 'red' : 'grey'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Cerrar" component={LogOut} options={{
          tabBarLabel: 'Salir',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="logout" color={focused ? 'red' : 'grey'} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="Login" component={Login} options={{ title: '', headerStyle: {
            backgroundColor: 'black', headerTintColor: '#ffff',
          } }} />
          <Stack.Screen name="Home" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}


{/* <Tab.Navigator>
<Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Settings" component={Tareas} />
</Tab.Navigator> */}