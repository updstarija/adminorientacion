import { ABIR_SESION,CERRAR_SESION } from '../actions/SesionTypes';
import { Fade } from 'reactstrap';

// import Conductor from '../../Model/Conductor';

const initialState = {
  Sesion:{
    Logueado:false,
    User: {}
  }
}

const SesionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ABIR_SESION:
      return {
        ...state,
        Sesion: {
          ...state.Sesion,
          Logueado: true,
          User: action.data,
        },
      };

    case CERRAR_SESION:
        return {
          ...state,
          Sesion: {
            ...state.Sesion,
            Logueado: false,
            User: {},
          },
        };

    default:
      return state;
  }
}

export default SesionReducer;