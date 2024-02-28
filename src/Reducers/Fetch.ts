import { FETCH_DATA } from "../Action/Fetch"

export const initialState = {
    loading:false,
    error:false,
    data:{}

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_DATA.SET_DATA:
   
    
    return { ...state,
        loading:false,
        error:false,
        data:{
            status:payload.status,
            articles:payload.data.articles,
        } 
     }
     case FETCH_DATA.SET_ERROR:
        return{
            ...state,
            loading:false,
            error:true,
            
        }
  default:
    return state
  }
}
