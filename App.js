import React, {useState} from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native';

import AssetExample from './components/Asset';

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  return (
    <View style={styles.container}>
      <AssetExample/>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={newText2 => setText2(newText2)}
        defaultValue={text2}
      />
      <View style={{ width: 200, marginTop: 10 }}>
      <TouchableOpacity style={styles.button}>
      <Text style={{color: "#fff", fontSize: 20}}>Sign In</Text>
      </TouchableOpacity>
      </View>
      <Text style={{color: "#fff", fontSize: 23, marginTop: 100, fontWeight: 'bold'}}>Forgot Your Password?</Text>
    </View>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b60b17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 65,
    color: '#b60b17',
    fontSize: 20,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 3,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60, 
    width: 200,
    marginTop: 10,
    backgroundColor: 'transparent', 
    borderWidth: 1,
    borderColor: "white"
  }
});