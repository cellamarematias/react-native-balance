import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//RTK
import { Provider } from 'react-redux';

import store, { RootState } from './src/store/store';
import Index from './index';

export default function App() {
  
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  );
}
