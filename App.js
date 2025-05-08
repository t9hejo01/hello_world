import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState('black');
  

  const logPress = () => {
    console.log('Button Pressed!')
  }

  const handlePress = () => {
    setBackgroundColor('red');
  }

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button title="Press" color={backgroundColor} onPress={() => {logPress(); handlePress();}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
