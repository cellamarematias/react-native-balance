import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//RTK
import { store } from './src/redux/store.js';
import { Provider } from 'react-redux';

import Home from './src/screens/Home.jsx';
import Tareas from './src/screens/Tareas.jsx';
import Login from './src/screens/Login.tsx';
import LogOut from './src/screens/Logout.tsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {


  function HomeTabs() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tareas" component={Tareas} />
        <Tab.Screen name="LogOut" component={LogOut} />
      </Tab.Navigator>
    );
  }


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
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