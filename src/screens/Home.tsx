import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


export default function Home({ navigation }) {

  return (
    <View style={styles.main}>

        {/* <View style={styles.left}>
          <Text>Mati</Text>
          <Text>debe a</Text>
          <Text>Maga</Text>
        </View>

        <View style={styles.rigth}>
          <Text>$1290</Text>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Pagar</Text>
            </View>
          </TouchableOpacity>
        </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center'
  },
  square: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    blurRadius: 1,
    borderRadius: 5,
    padding: 20,
    marginTop: 1
  },
  left: {
    flex: 1,
    fontSize: 5,
    color: '#fff'
  }
  
});
