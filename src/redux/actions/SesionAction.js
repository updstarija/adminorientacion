import {ABIR_SESION,CERRAR_SESION } from './SesionTypes';

export const abrirSesion = (User) => (
  {
    type: ABIR_SESION,
    data: User
  }
);
export const CerrarSesion = () => (
  {
    type: CERRAR_SESION,
  }
);
