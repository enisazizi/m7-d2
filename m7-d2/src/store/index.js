import {createStore,combineReducers,compose,applyMiddleware} from 'redux'

import favouriteReducer from '../reducers/favourite'
import jobReducer from '../reducers/jobs'
import thunk from 'redux-thunk'


const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const initialState ={
    favourite:{
        jobs:[],
    },
    jobsSearch:{
        jobs:[],
        error:false,
    },
}

const mainReducer = combineReducers({favourite:favouriteReducer,jobsSearch:jobReducer})

export default function configureStore(){
    return createStore(
        mainReducer,
        initialState,
       composedEnhancer(applyMiddleware(thunk))
    )
}