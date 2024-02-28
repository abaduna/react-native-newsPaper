import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View ,Text, StyleSheet} from 'react-native'
import { RoutStackParams } from '../types'
import { Image } from '@rneui/base'



const Detail = () => {
  const {params:{author,title,publishedAt,description,content,urlToImage}} = useRoute<NativeStackScreenProps<RoutStackParams,"Detail">["route"]>()
  return (
    <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.publishedAt}>Publicada el dia:{publishedAt}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.author}>Author {author}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container:{},
  author:{fontSize:11},
  description:{fontSize:15,fontWeight:"600"},
  title:{fontSize:25,textAlign:"center"},
  publishedAt:{textAlign:"left"}
})
export default Detail