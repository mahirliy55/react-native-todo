import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Form = ({ addHandler }) => {
  const [text, setText] = useState();
  const onChange = (text) => {
    setText(text);
  };



  return (
    <View style={styles.main}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
      />
      <Button color="green" title="Добавить задачу" onPress={()=>addHandler(text)}/>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
