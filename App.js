import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
 
  const [name, setName] = useState("Marcus");
  const [age, setAge] = useState(27);

  const setAgeFromTextInput =(value) => {
    setAge(value)
  }


  return (
    <View style={styles.container}>
    <TextInput
     multiline
     placeholder='Insert Name'
     style={styles.input}
     onChangeText={(value) => setName(value)}
    />
    <Text>Name: {name}</Text>
    <TextInput
     placeholder='Insert Age'
     keyboardType='numeric'
     style={styles.inputAge}
     onChangeText={(value) =>setAgeFromTextInput(value)}
    />
    <Text>Age: {age}</Text>
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
  input: {
    borderWidth: 10,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  inputAge: {
    borderWidth: 2,
    borderColor: "red"
  }
});
