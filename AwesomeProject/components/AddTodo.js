import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nova tarefa..."
        onChangeText={changeHandler}

      />
      <Button
        title="Adicionar"
        onPress={() => {
          submitHandler(text);
        }}
      />
    </View>
  );
}
