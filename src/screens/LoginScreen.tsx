// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { NavigationProp } from '@react-navigation/native';
import { signInWithGoogle } from '../../firebase';
import sebooImage from '../assets/images/seboo.png';

const LoginScreen: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
      <Button title="Create Account" onPress={() => navigation.navigate('SignUp')} />
      <TouchableOpacity
        style={styles.googleButton}
        onPress={async () => {
          try {
            const user = await signInWithGoogle();
            console.log('Google Sign-In successful:', user);
            navigation.navigate('Main');
          } catch (error) {
            console.error('Google Sign-In failed:', error);
          }
        }}
      >
        <Image source={sebooImage} style={{ width: 24, height: 24, marginRight: 8 }} />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  googleText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
