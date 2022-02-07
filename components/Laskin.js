import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Laskin({ navigation }) {
  
  const [result, setResult] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [data, setData] = useState([]);

  const add = () => {
    let sum = parseInt(input1) + parseInt(input2)
    setResult(sum);
    handleChange(input1 + " + " + input2 + " = " + sum);
  }

  const subtract = () => {
    let subtraction = parseInt(input1) - parseInt(input2)
    setResult(subtraction);
    handleChange(input1 + " - " + input2 + " = " + subtraction);
  }

  const handleChange = (text) => {
    setData([...data, text]);
    setInput1("");
    setInput2("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 22 }}>
        Result: {result}
      </Text>
      <TextInput
        style={{width:100, borderColor: 'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={input => setInput1(input)}
        value={input1}
      />
      <TextInput
        style={{width:100, borderColor: 'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={input => setInput2(input)}
        value={input2}
      />
      <View style={styles.buttons}>
        <Button onPress={add} title="+" />
        <Button onPress={subtract} title="-" />
      </View>
      <Button onPress={() => navigation.navigate('Historia', {data})}
        title="Historia" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: "20%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
});