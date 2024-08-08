import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from '../Theme/Style';


interface Numero {
    valor: string; 
    onChangeTextHandler: (text: string) => void; 
}

export const Input: React.FC<Numero> = ({ valor, onChangeTextHandler }) => (
  <View style={styles.container3}>
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={valor}
      onChangeText={onChangeTextHandler}
    />
  </View>
);