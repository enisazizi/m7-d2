export default function(state={},action){
    switch(action.type){
        case "ADD_JOB_TO_FAVOURITES":
            return{
                ...state,
                jobs: state.jobs.concat(action.payload)
                
            }
            case "REMOVE_JOB_FROM_FAVOURITES":
                return{
                    ...state,
                  
                        jobs:[
                            ...state.jobs.filter(
                                (job)=> job.id !==action.payload
                               
                            )
                        ]
                    
                }
            default :
            return state
    }
}