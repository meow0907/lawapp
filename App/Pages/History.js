import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../Shared/Colors';

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
});