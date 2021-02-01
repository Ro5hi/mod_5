import { combineReducers } from 'redux' 
import { buildReducer } from './buildReducer'
import { partsReducer } from './partsReducer'

    const rootReducer = combineReducers({
        builds: buildReducer,
        parts: partsReducer
    })

export default rootReducer