// screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import { NavigationProp } from '@react-navigation/native';

type SignUpScreenProps = {
  navigation: NavigationProp<any>;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [sexoSelf, setSexoSelf] = useState('');
  const [trainingTime, setTrainingTime] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [level, setLevel] = useState('');
  const [belt, setBelt] = useState('');
  const [location, setLocation] = useState('');
  const [sexoOpponent, setSexoOpponent] = useState('');
  const [fighterRange, setFighterRange] = useState('');
  const [age, setAge] = useState('');
  const [trophy, setTrophy] = useState('');

  const sports = ['MMA', 'Box'];
  const levels = ['Principiante', 'Amateur', 'Profesional'];
  const belts = {
    MMA: ['White', 'Blue', 'Purple', 'Brown', 'Black'],
    Box: ['No belt system'],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Text style={styles.label}>Sexo Self</Text>
      <Picker
        selectedValue={sexoSelf}
        style={styles.picker}
        onValueChange={(itemValue) => setSexoSelf(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <Text style={styles.label}>Cuanto tiempo entrenando</Text>
      <TextInput style={styles.input} placeholder="Tiempo entrenando" value={trainingTime} onChangeText={setTrainingTime} />
      <Text style={styles.label}>Deportes</Text>
      {sports.map((sport, index) => (
        <CheckBox
          key={index}
          title={sport}
          checked={selectedSports.includes(sport)}
          onPress={() => {
            if (selectedSports.includes(sport)) {
              setSelectedSports(selectedSports.filter((s) => s !== sport));
            } else {
              setSelectedSports([...selectedSports, sport]);
            }
          }}
          iconRight
          iconType="font-awesome"
          checkedIcon="check-square"
          uncheckedIcon="square-o"
        />
      ))}
      <Text style={styles.label}>Nivel</Text>
      <Picker
        selectedValue={level}
        style={styles.picker}
        onValueChange={(itemValue) => setLevel(itemValue)}
      >
        {levels.map((lvl, index) => (
          <Picker.Item key={index} label={lvl} value={lvl} />
        ))}
      </Picker>
      {selectedSports.includes('MMA') && (
        <>
          <Text style={styles.label}>Cinturón en MMA</Text>
          <Picker
            selectedValue={belt}
            style={styles.picker}
            onValueChange={(itemValue) => setBelt(itemValue)}
          >
            {belts.MMA.map((belt, index) => (
              <Picker.Item key={index} label={belt} value={belt} />
            ))}
          </Picker>
        </>
      )}
      <Text style={styles.label}>Training Location (optional)</Text>
      <TextInput style={styles.input} placeholder="Training Location" value={location} onChangeText={setLocation} />
      <Text style={styles.label}>Sexo de con quien quieres pelear</Text>
      <Picker
        selectedValue={sexoOpponent}
        style={styles.picker}
        onValueChange={(itemValue) => setSexoOpponent(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <Text style={styles.label}>Range of Fighter</Text>
        <TextInput style={styles.input} placeholder="Range of Fighter" value={fighterRange} onChangeText={setFighterRange} />
        <Text style={styles.label}>Edad</Text>
        <TextInput style={styles.input} placeholder="Edad" keyboardType="numeric" value={age} onChangeText={setAge} />
        <Text style={styles.label}>Trophy</Text>
        <TextInput style={styles.input} placeholder="Trophy" value={trophy} onChangeText={setTrophy} />
        <Button title="Sign Up" onPress={() => navigation.navigate('Main')} buttonStyle={styles.button} />
        <Button title="Back to Login" onPress={() => navigation.navigate('Login')} buttonStyle={styles.button} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  picker: {
    width: '100%',
    height: 40,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2196F3',
    marginTop: 20,
    width: '100%',
    padding: 12,
  },
});

export default SignUpScreen;
