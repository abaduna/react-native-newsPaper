import { useEffect, useReducer } from "react"
import Fetch, { initialState } from "../Reducers/Fetch"
import { API } from "../Api"
import { FETCH_DATA } from "../Action/Fetch"

export const useFech = ()=>{
    const [state, dispatch] = useReducer(Fetch, initialState)
    const getData = async()=>{
        try {
            const data = await API.get("") 
            
            console.log(`data.data`);
            // console.log(data.data.articles);
            
            
            
            dispatch({type:FETCH_DATA.SET_DATA,payload:data})
        } catch (error) {
            console.error(error);
          dispatch({
              type: FETCH_DATA.SET_ERROR,
              payload: undefined
          });
        }
    }
    useEffect(()=>{getData()},[])
    return state
}