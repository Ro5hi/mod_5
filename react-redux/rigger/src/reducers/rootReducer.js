import { combineReducers } from 'redux' 
import { buildReducer } from './buildReducer'
import { partsReducer } from './partsReducer'

    export const rootReducer = combineReducers({
        builds: buildReducer,
        parts: partsReducer
    })