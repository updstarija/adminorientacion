import { ADD_CONDUCTOR,DELETE_CONDUCTOR ,EDIT_CONDUCTOR,LOGUEAR_CONDUCTOR} from './ConductoresTypes';

export const addConductor = (Conductor) => (
  {
    type: ADD_CONDUCTOR,
    data: Conductor
  }
);
export const editConductor = (Conductor) => (
  {
    type: EDIT_CONDUCTOR,
    data: Conductor
  }
);

export const deleteConductor = (key) => (
  {
    type: DELETE_CONDUCTOR,
    key: key
  }
);

export const LoguearConductor = (UserName,Password) => (
  {
    type: LOGUEAR_CONDUCTOR,
    data: {UserName,Password}
  }
);
