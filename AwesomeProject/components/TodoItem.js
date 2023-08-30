import { Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function TodoItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View>
        <MaterialIcons name="close" size={18}/>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}