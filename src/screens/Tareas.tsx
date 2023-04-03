import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Tareas({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tareas Screen</Text>
      <Button
        title="Al Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}