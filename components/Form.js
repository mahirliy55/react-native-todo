import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Form = ({ addHandler }) => {
  const [text, setText] = useState();
  const [msg, setMsg] = useState(null);

  const onChange = (text) => {
    setText(text);
  };

  const showMsg = () => {
    setMsg("Добавлен...")
    setTimeout(() => {
      setMsg("")
    }, 2000);
  }

  const clearText = () => {
    setText("")
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        onChangeText={onChange}
        placeholder="Впишите задачу..."
      />
      {msg !== null ? (
        <Text style={styles.msgText}>{msg}</Text>
      ) : null}
      <Button
        color="green"
        title="Добавить задачу"
        onPress={() => {addHandler(text); clearText(); showMsg()}}
      />
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
  msgText: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  }
});
