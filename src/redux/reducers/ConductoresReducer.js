import { ADD_CONDUCTOR,DELETE_CONDUCTOR,EDIT_CONDUCTOR,LOGUEAR_CONDUCTOR } from '../actions/ConductoresTypes';
// import Conductor from '../../Model/Conductor';

const initialState = {
  lstConductores: [],
  Sesion:{
    Logueado:false,
    Conductor: new Conductor()
  }
}

const ConductoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONDUCTOR:
      return {
        ...state,
        lstConductores: [...state.lstConductores,action.data]
      };


    case EDIT_CONDUCTOR:
      // console.log('Edit COndutor')
      // console.log(action)
      let indexOf = state.lstConductores.findIndex(Conductor => Conductor.IdConductor === action.data.IdConductor)
      let List = [...state.lstConductores];
      List[indexOf]= action.data
      return {
        ...state,
        lstConductores: List
      };


    case DELETE_CONDUCTOR:
      // console.log(action)
      return {
        ...state,
        lstConductores: state.lstConductores.filter((item) =>
          item.IdConductor !== action.key)
      };

    case LOGUEAR_CONDUCTOR:
      // console.log('Loguear Conductor')
      // console.log(action.data)
      // console.log('---------------')
      // console.log(state.Sesion)
      let DataTemp = state.lstConductores.find(Conductor => (Conductor.UserName == action.data.UserName) && (Conductor.Password == action.data.Password));
      // console.log(DataTemp == null)
      // console.log(DataTemp)
      if(DataTemp == null){
        return {
          ...state,
          Sesion:{Logueado : false ,Conductor : new Conductor()}
        };
      }else{
        return {
          ...state,
          Sesion:{Logueado : true ,Conductor : DataTemp}
        };
      }
      


    default:
      return state;
  }
}

export default ConductoresReducer;