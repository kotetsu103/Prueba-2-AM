import React from 'react'
import { Image, View } from 'react-native'
import { TitleComponent } from '../Components/TitleComponent'
import { ButtonComponent } from '../Components/BottonComponenet'
import { styles } from '../Theme/Style'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const Screen2 = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
    <TitleComponent title='Imagen 1'/>
    <Image
      source={{ uri: 'https://i.blogs.es/215a63/doom-eternal-1/1366_2000.jpeg' }}
      style={styles.image}
    />
    <ButtonComponent textButton="Regresar" onPress={() => navigation.navigate('Menu')} />
  </View>
  )
}
