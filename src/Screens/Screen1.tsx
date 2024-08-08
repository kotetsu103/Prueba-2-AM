import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ButtonComponent } from '../Components/BottonComponenet'
import { styles } from '../Theme/Style'
import { TitleComponent } from '../Components/TitleComponent'

interface Props extends StackScreenProps<any, any>{};

export const Screen1 = ({navigation}: Props) => {
  return (
  <View style={styles.container}>
    <TitleComponent title='Bienvenido'/>
    <ButtonComponent textButton="Imagen1" onPress={() => navigation.navigate('Imagen1')} />
    <ButtonComponent textButton="Imagen2" onPress={() => navigation.navigate('Imagen2')} />
    <ButtonComponent textButton="Mayor" onPress={() => navigation.navigate('Mayor')} />
    <ButtonComponent textButton="Menor" onPress={() => navigation.navigate('Menor')} />
  </View>
  )
}
