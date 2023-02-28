import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//RTK
import { store } from './src/redux/store.js';
import { Provider } from 'react-redux';

import Home from './src/screens/Home.jsx';
import Tareas from './src/screens/Tareas.jsx';
import Login from './src/screens/login/Login.tsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ title: '', headerStyle: {
            backgroundColor: 'black', headerTintColor: '#ffff',
          } }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Gastos' }} />
          <Stack.Screen name="Tareas" component={Tareas} options={{ title: 'Tareas' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
