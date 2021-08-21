// import { ADD_CONDUCTOR,DELETE_CONDUCTOR,EDIT_CONDUCTOR,LOGUEAR_CONDUCTOR } from '../actions/ConductoresTypes';
import firebase  from '../../Firebase/Firebase'

const initialState = {
    Firebase:firebase
}

const ConductoresReducer = (state = initialState, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
}

export default ConductoresReducer;