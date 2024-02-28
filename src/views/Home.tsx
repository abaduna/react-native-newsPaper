import React, { useEffect } from 'react'
import {View,Text, ScrollView} from "react-native"
import { useFech } from '../hocks/useFetch'
import { Button, Image } from '@rneui/base';
import { PostNews, RoutStackParams, article } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import NewPaper from '../components/NewPaper';

type PostImageNavigationType =NativeStackNavigationProp<RoutStackParams, "Detail">
function Home() {
  let {data,loading,error} = useFech()
  const {navigate} = useNavigation<PostImageNavigationType>()
  const { articles, status } = data as article
  console.log(articles);
  
  
  
  
  

  return (
    <View>
        <Text>Home</Text>
          <ScrollView>

            {articles?.length > 0 &&
          articles?.map((arti) => (
            
           <NewPaper  {...arti}/>
          
        ))} 
          </ScrollView>
           

        
    </View>
  )
}

export default Home