export default function(state={},action){
    switch(action.type){
        case "GET_JOBS":
            return{
                ...state,
                jobs: action.payload
                
            }
           case "GET_ERROR":
               return{
                   ...state,
                   error:action.payload
               }
            default :
            return state
    }
}