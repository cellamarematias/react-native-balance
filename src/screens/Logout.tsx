import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LogOut({ navigation }) {

  const logout = () => {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('token');
    navigation.replace('Login');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      e.preventDefault();

      Alert.alert('Cerrando sesión', 'Seguro que desea cerrar la sesión?', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Si', onPress: () =>logout()},
      ]);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chau!</Text>
      {/* <Button
        title="Cerrar sesión"
        onPress={() => logout()}
      /> */}
    </View>
  );
}