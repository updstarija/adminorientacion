import { createStore, combineReducers } from 'redux';
import AnimalesReducer from './reducers/AnimalesReducer';
import FirebaseReducer from './reducers/FirebaseReducer'
import SesionReducer from './reducers/SesionReducer'
import TestsReducer from './reducers/TestsReducer'

const rootReducer = combineReducers({
  AnimalesReducer: AnimalesReducer,
  FirebaseReducer: FirebaseReducer,
  SesionReducer: SesionReducer,
  TestsReducer: TestsReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;