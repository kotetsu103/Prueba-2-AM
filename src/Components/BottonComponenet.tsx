import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/Style';

interface Props {
    textButton: string;
    onPress: () => void;
}
export const ButtonComponent = ({textButton, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}
    onPress={onPress}>
    {textButton}
    </Text>
</TouchableOpacity>
  )
}