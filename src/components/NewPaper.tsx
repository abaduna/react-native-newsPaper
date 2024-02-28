import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button } from '@rneui/base'
import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import { RoutStackParams } from '../types'

type PostImageNavigationType =NativeStackNavigationProp<RoutStackParams, "Detail">
const NewPaper = ({author,title,publishedAt,description,content,urlToImage}) => {
    
    
    const {navigate} = useNavigation<PostImageNavigationType>()
    const handlerSeeNewsPappersPress =()=>{
        navigate("Detail",{author,title,publishedAt,description,content,urlToImage})
      }
  return (
    <View style={style.container}>
        
        <Text  style={style.title}>{title}</Text>
        <Text  style={style.author}>el autor es {author}</Text>
        <Button color="warning" type='outline' style={style.btn} title="Ver mas"  onPress={handlerSeeNewsPappersPress}/>
    </View>
  )
}
const style = StyleSheet.create({
    container:{},
    title:{fontWeight:"500",fontSize:15},
    author:{},
    btn:{backgroundColor:""}
})
export default NewPaper