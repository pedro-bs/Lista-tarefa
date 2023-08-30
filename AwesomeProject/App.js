/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
--------------------------------------------
*/
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '...' },
    { id: 2, text: '...' },
    { id: 3, text: '...' },
    { id: 4, text: '...' },
    { id: 5, text: '...' },
  ]);
  
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [...prevTodos, { text, id: todos.length + 1 }];
      });
    } else {
      Alert.alert(
        'Erro!',
        'As tarefas precisam ter no mínimo 3 caracteres.',
        [{ text: 'Entendi', onPress: () => console.log('Alerta fechado.') }]
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('Saí teclado!');
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={todo => todo.id}
              renderItem={({ item }) => (
                <TodoItem item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
