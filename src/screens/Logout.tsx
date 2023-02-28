import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LogOut({ navigation }) {

  useEffect(() => {
    getData();
  }, []);
  

  const getData = async () => {
    try {
      AsyncStorage.getItem('user',(err,item) => {
        if (item) {
          console.log(item);
        } else {
          navigation.navigate('Login');
        }
      });
    } catch (error) {
      console.log('Error retrieving data' + error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Tareas')}
      />
    </View>
  );
}