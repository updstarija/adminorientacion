import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { Link } from "react-router-dom";
import "../../StyGeneral/StyGeneral.css";

import SwalMensaje from "../../Components/SwalMensaje";

const ExelEstudiantes = (props) => {
  const { lstTest = [] } = props;

  console.log("lstest ", lstTest);

  return (
    <>
      <div className="row justify-content-center">
        <ReactHTMLTableToExcel 
          id="test-table-xls-button"
          className="download-table-xls-button bg-success text-light"
          table="myTable"
          filename="Planilla Estudiantes"
          sheet="Pagina 1"
          buttonText="Descargar Planilla Estudiantes"
        />
      </div>
      <div className="container-fluid row p-0 justify-content-center m-0 animate__animated animate__wobble">
        <div className="row w-75  shadow-lg justify-content-center align-items-start mt-5">
          {/* <SwalMensaje/> */}

          <table className="table " id="myTable">
            <thead className="GeneCabezeraTable">
              <tr>
                <th className="text-light" scope="col">
                  Id
                </th>
                <th className="text-light" scope="col">
                  Nombres
                </th>
                <th className="text-light" scope="col">
                  Apellidos
                </th>
                <th className="text-light" scope="col">
                  Coelgio
                </th>
                <th className="text-light" scope="col">
                  Curso
                </th>
                <th className="text-light" scope="col">
                  Telefono
                </th>
                <th className="text-light" scope="col">
                  Turno
                </th>
              </tr>
            </thead>
            <tbody>
              {lstTest.map((test, idnex) => {
                const {
                  // Id = "",
                  apellidos = "",
                  nombres = "",
                  colegio = "",
                  colegioOtro = "",
                  curso = "",
                  telefono = "",
                  turno = "",
                } = test;
                console.log('otro colegio ',colegioOtro)
                return (
                  <tr key={idnex}>
                    {/* <td>{Id}</td> */}
                    <td>{nombres}</td>
                    <td>{apellidos}</td>
                    <td>{colegio != 'Otro' ? colegio : colegioOtro}</td>
                    <td>{curso}</td>
                    <td>{telefono}</td>
                    <td>{turno}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    Firebase: state.FirebaseReducer.Firebase,
    Sesion: state.SesionReducer.Sesion,
    lstTest: state.TestsReducer.lstTest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: (food) => dispatch(addFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExelEstudiantes);
