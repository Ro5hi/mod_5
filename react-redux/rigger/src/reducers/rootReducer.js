import { combineReducers } from 'redux' 
import { buildReducer } from './buildReducer'
import { partsReducer } from './partsReducer'

    const rootReducer = combineReducers({
        buildReducer,
        partsReducer
    })

export default rootReducer