import React, { useEffect, useLayoutEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//RTK
import { useDispatch, useSelector } from 'react-redux';

import Home from './src/screens/Home';
import Tareas from './src/screens/Tareas';
import Login from './src/screens/Login';
import LogOut from './src/screens/Logout';
import store, { RootState } from './src/store/store';
import { deauthenticate } from './src/store/slices/authSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Index() {

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    // aquí se puede realizar la lógica para comprobar si el usuario está autenticado
    console.log('comprobando usuario')
    if (!isAuthenticated) {
      // redireccionar a la página de inicio de sesión
    }
  }, [isAuthenticated]);

  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(deauthenticate());
  };
  
  console.log(isAuthenticated)

  function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: '#DF2E38',
        tabBarStyle: {borderTopWidth: 0}
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
        <Tab.Screen name="Cerrar" component={LogOut} 
        options={{
          tabBarLabel: 'Salir',
          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="logout" color={focused ? 'red' : 'grey'} size={size} />
          ),
        
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            handleLogout();
            // Do something with the `navigation` object
            navigation.replace('Login');
          },
        })}
        />
      </Tab.Navigator>
    );
  }
 
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={HomeTabs} />

            <Stack.Screen name="Login" component={Login} options={{title: '', headerStyle: {backgroundColor: 'black', headerTintColor: '#ffff',}}} />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

