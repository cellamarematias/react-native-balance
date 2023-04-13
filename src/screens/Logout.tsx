import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button, View, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { deauthenticate } from '../store/slices/authSlice';

export default function LogOut({ navigation }) {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    console.log('saliendo')
  };

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      e.preventDefault();
      Alert.alert('Cerrando sesión', 'Seguro que desea cerrar la sesión?', [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Si', onPress: handleLogout },
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