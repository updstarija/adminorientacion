import { ADD_ANIMAL,DELETE_ANIMAL,EDIT_USUARIO } from '../actions//AnimalesTypes';

const initialState = {
  animalList: ['perro','gatp']
}

const AnimalesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANIMAL:
      return {
        ...state,
        animalList: [...state.animalList,action.data]
      };


      case EDIT_USUARIO:
      let indexOfUser = state.UsuarioList.findIndex(user => user.Id === action.data.id)
      let List = [...state.UsuarioList];
      List[indexOfUser]= action.data.data()
      return {
        ...state,
        UsuarioList: List
      };


    case DELETE_ANIMAL:
      return {
        ...state,
        animalList: state.animalList.filter((item) =>
          item.key !== action.key)
      };
    default:
      return state;
  }
}

export default AnimalesReducer;