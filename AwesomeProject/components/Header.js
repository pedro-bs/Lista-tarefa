import {Text, View } from 'react-native';

import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todos</Text>
    </View>
  );
}