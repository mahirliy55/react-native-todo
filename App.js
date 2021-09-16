import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
import KeyboardAvoidingWrapper from "./components/KeyboardAvoidingWrapper";

const App = () => {
  const [list, setList] = useState([]);

  const addHandler = (text) => {
    if (text === "" || text === null) {
      return false
    }
    
    setList([
      { text: text, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
  };

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter((l) => l.key != key);
    });
  };

  return (
    <KeyboardAvoidingWrapper>
      <View>
        <Header />
        <Form addHandler={addHandler} />
        <FlatList
          keyExtractor={(item) => item.key}
          data={list}
          renderItem={({ item }) => (
            <List el={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default App;

const styles = StyleSheet.create({});
