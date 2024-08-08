import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ButtonComponent } from '../Components/BottonComponenet';
import { styles } from '../Theme/Style';
import { InputComponent } from '../../../carrito-compras/src/Components/InputComponent';
import { Input } from '../Components/InputComponent';
import { TitleComponent } from '../Components/TitleComponent';


interface Props extends StackScreenProps<any, any>{}; 

export const Screen5 = ({navigation}: Props) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const Mayor = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    const mayor = n1 < n2 ? n1 : n2;
    setResult(`El menor de los dos es: ${mayor}`);
  };

  return (
    <View style={styles.container2}>
      <TitleComponent title='Elegir el menor'/>
      <Input valor={num1} onChangeTextHandler={setNum1} />
      <Input valor={num2} onChangeTextHandler={setNum2} />
      <ButtonComponent textButton='Menor' onPress={Mayor}/>
      <Text style={styles.result}>{result}</Text>
      <ButtonComponent textButton="Regresar" onPress={()=>navigation.navigate('Menu')} /> 
    </View>
  );
};