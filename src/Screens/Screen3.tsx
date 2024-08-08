import React from 'react'
import { Image, View } from 'react-native'
import { TitleComponent } from '../Components/TitleComponent'
import { ButtonComponent } from '../Components/BottonComponenet'
import { styles } from '../Theme/Style'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const Screen3 = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
    <TitleComponent title='Imagen 2'/>
    <Image
      source={{ uri: 'https://wiki.warthunder.com/images/thumb/8/8c/ArtImage_Tiger_II_%2810.5_cm_Kw.K%29.png/800px-ArtImage_Tiger_II_%2810.5_cm_Kw.K%29.png' }}
      style={styles.image}
    />
    <ButtonComponent textButton="Regresar" onPress={() => navigation.navigate('Menu')} />
  </View>
  )
}
