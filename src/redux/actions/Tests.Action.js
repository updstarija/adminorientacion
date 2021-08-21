import {CARGAR_LST_TESTS } from './TestsTypes';

export const cargarLstTest = (lst) => (
  {
    type: CARGAR_LST_TESTS,
    data: lst
  }
);