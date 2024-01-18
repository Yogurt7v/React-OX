import {appReducer} from './reducer'
import { legacy_createStore as createStore } from 'redux'


// export const store = createStore(appReducer)
// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
 export const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 export default store
