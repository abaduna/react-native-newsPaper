import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { RoutStackParams } from "../types";

import Home from "../views/Home"
import Detail from "../views/Detail";
const Stack = createNativeStackNavigator<RoutStackParams>()

const Routes =()=>(
    
        <NavigationContainer>
                <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home}/>
                        <Stack.Screen name="Detail" component={Detail}/>
                </Stack.Navigator>
        </NavigationContainer>
         
    
)
export default Routes