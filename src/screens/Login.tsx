import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import SizedBox from '../components/SizeBox';
import { useLazyGetUserQuery } from '../redux/login/login';
import { Controller, useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface FormData {
  usuario: string;
  password: string;
}

export default function Login({ navigation }) {
  const usuarioInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);
  const [trigger, { data, isSuccess, isError, isFetching }] = useLazyGetUserQuery(data);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      usuario: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(({ usuario, password }) => {
    const user = {
      usuario: usuario, password
    };
    trigger(user);
  });

  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem('user', data.user)
      await AsyncStorage.setItem('token', data.token)
    } catch (e) {
      // saving error
    }
  }

  if (isFetching) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#FF0303" />
      </View>
    );
  }

  if (isError) {
    console.log(isError);
    Alert.alert('Credenciales inválidas.')
  }

  if (isSuccess) {
    storeData(data)
    navigation.navigate('Home');
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >

          <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/icono.png')}></Image>
          </View>

          <Text style={styles.title}>Hola!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Ingresá tus credenciales.</Text>

          <SizedBox height={32} />

          <Pressable onPress={() => usuarioInput.current?.focus()}>
            <View style={styles.form}>
              <Text style={styles.label}>Usuario</Text>

              <Controller
                control={control}
                name="usuario"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCompleteType="usuario"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    ref={usuarioInput}
                    returnKeyType="next"
                    style={styles.textInput}
                    textContentType="username"
                    value={value}
                  />
                )}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable onPress={() => passwordInput.current?.focus()}>
            <View style={styles.form}>
              <Text style={styles.label}>Contraseña</Text>

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <TextInput
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onSubmitEditing={onSubmit}
                    ref={passwordInput}
                    returnKeyType="done"
                    keyboardType='numeric'
                    secureTextEntry
                    style={styles.textInput}
                    textContentType="password"
                    value={value}
                  />
                )}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <SizedBox height={16} />

          <TouchableOpacity onPress={onSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}


const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(93, 95, 222)',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  form: {
    alignItems: 'center',
    backgroundColor: 'rgb(58, 58, 60)',
    borderRadius: 8,
    flexDirection: 'row',
    height: 48,
    paddingHorizontal: 16,
  },
  label: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 95,
  },
  root: {
    backgroundColor: '#000000',
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  subtitle: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
});
