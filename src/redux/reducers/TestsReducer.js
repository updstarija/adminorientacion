import { CARGAR_LST_TESTS } from '../actions/TestsTypes';

const initialState = {
    lstTest:[]
}

const TestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARGAR_LST_TESTS:
      return {
        ...state,
        lstTest: action.data
      };


    default:
      return state;
  }
}

export default TestsReducer;