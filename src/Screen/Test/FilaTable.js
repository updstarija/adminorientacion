import React, { Fragment, useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Link, withRouter } from "react-router-dom";

import ModalDatosPersonales from "./ModalDatosPersonales";
import ModalRevisarTest from "./ModalRevisarTest";
import ModalAprobarRevision from "./ModalAprobarRevision";
import ModalTestCompleto from "./ModalTestCompleto";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Alert } from "reactstrap";

import firebase from "../../Firebase/Firebase";

const MySwal = withReactContent(Swal);

const FilaTable = (props) => {
  useEffect(() => {
    // console.log('props fila ',props)
    _SetEstadoTest();
    _SetAprobadoTest();
  }, [props]);
  const { test } = props;
  const {
    history,

    nombres = "",
    colegio = "",
    apellidos = "",
    Id = "",
    tutor = "",
    telefono = "Sin telefono",
    estadoTest = "sin estado",
    revisadoPor = "sin revisado",
    revisado = "sin revisado",
    aprobadoPor = "",
  } = test;
  // console.log(test)

  const [TestCompleto, setTestCompleto] = useState(false);
  const [TestReviado, setTestReviado] = useState(false);

  function _SetAprobadoTest() {
    if (test?.revisadoPor?.length > 0) {
      setTestReviado(true);
    }
  }
  function ShowModalDeleteFila(Id) {
    Swal.fire({
      title: "Eliminar Test?",
      text: "Esta seguro que desea eliminar !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deseo Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        EliminarTest(Id);
        // Swal.fire(
        //   `${Id}`,
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    });
  }
  async function _SetEstadoTest() {
    if (telefono == "+52 624 129 2406") {
      console.log(
        "rev comple ",
        " 1",
        (test?.resumen?.test1,
        " 2",
        test?.resumen?.test2,
        " 3",
        test?.resumen?.test3,
        " 4",
        test?.resumen?.test4)
      );
    }
    if (
      test?.resumen?.test1 &&
      test?.resumen?.test2 &&
      test?.resumen?.test3 &&
      test?.resumen?.test4
    ) {
      await setTestCompleto(true);
    } else {
      await setTestCompleto(false);
    }
  }

  //Funciones
  function _RenderWhatapp() {
    let mensajeWhatsapp = "";
    if (!TestCompleto) {
      //mensajeWhatsapp ="Tu Test de Orientación Vocacional está incompleto. Vuelve a conectarte y termina las pruebas para recibir tus Resultados en el siguiente enlace:  https://upds-test.web.app/";
      mensajeWhatsapp =
        "Tu Test de Orientación Vocacional de la Universidad de Burgos y la Universidad Domingo Savio está incompleto. Vuelve a conectarte y termina las 4 pruebas para recibir tus Resultados (listado de carreras técnicas y universitarias que te sugerimos estudiar) en el siguiente enlace:  https://tarija.upds.edu.bo/testorientacion/ (cópialo y ábralo en el buscador Google Chrome, y utilice su cuenta de Gmail o Facebook para acceder).";
    } else if (revisadoPor != "sin revisado") {
      // mensajeWhatsapp ='Tu Test de Orientación Vocacional está revisado. Verifica tus Resultados en el Menú(parte superior derecha del Test) en el siguiente enlace:   https://upds-test.web.app/'
      // mensajeWhatsapp = 'Tu Test de Orientación Vocacional está revisado. Verifica tus Resultados ingresando nuevamente en el siguiente enlace: https://upds-test.web.app/  con tu cuenta de Gmail o Facebook.  Una vez dentro, busca en el Menú (parte superior derecha) la sección correspondiente.'
      //mensajeWhatsapp = 'Tu Test de Orientación Vocacional de la Universidad de Burgos y la Universidad Domingo Savio está revisado. Verifica tus resultados ingresando nuevamente en el siguiente enlace: https://upds-test.web.app/ con tu cuenta de Gmail o Facebook (abriendo siempre desde el buscador Google Crome). Una vez dentro, busca en el Menú (parte superior derecha) la sección de Resultados'
      //Modificado
      mensajeWhatsapp =
        "Los RESULTADOS (carreras técnicas y universitarias que te sugerimos estudiar) de tu Test de Orientación Vocacional de la Universidad de Burgos y la Universidad Domingo Savio están listos. Verifícalos ingresando en el siguiente enlace: https://tarija.upds.edu.bo/testorientacion/ con tu cuenta de Gmail o Facebook (abriendo desde el buscador Google Chrome).Una vez dentro, busca en el Menú (parte superior derecha) la sección de Resultados.                                                      ";
    }
    if (telefono === "Sin telefono") {
    } else {
      return (
        <FontAwesomeIcon
          icon={faWhatsapp}
          onClick={() => {
            EnviarWhatsapp(`${telefono}`, mensajeWhatsapp);
          }}
          className="IconoWhatsapp animate__animated animate__swing"
        />
      );
    }
    // return(<FontAwesomeIcon icon={faWhatsapp} onClick={()=>{}} className='IconoNoWhatsapp animate__animated animate__swing'/>)
  }

  function EnviarWhatsapp(tel, mensaje = "") {
    // firebase.db.collection("usuarios").doc(`${id}`).delete().then(function() {
    //   console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
    // history.push('https://wa.me/65811806')
    // alert(mensaje)
    if (tel[0] == "+") {
      // alert('otro pais')
      window.open(`https://api.whatsapp.com/send?phone=${tel}&text=${mensaje}`);
    } else {
      // alert('bolivia')
      window.open(
        `https://api.whatsapp.com/send?phone=+591${tel}&text=${mensaje}`
      );
    }
    // window.open(`https://api.whatsapp.com/send?phone=591${tel}&text=${mensaje}`)
  }
  function _RenderAprobado() {
    if (aprobadoPor.length > 0) {
      // return 'Si'
      return aprobadoPor;
    }
    return "No";
  }

  function EliminarTest(id) {
    // alert(id)

    firebase.db
      .collection("usuarios")
      .doc(`${id}`)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        Swal.fire(
          // `${Id}`,
          "Eliminado!"
          // 'El teste fue eliminado.',
          // 'success'
        );
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  }

  async function ChangeNameUsuario() {
    let temp_test = test;
    temp_test.nombres = "Leonel Rodrigo";
    temp_test.apellidos = "Suarez Perez";
    console.log(temp_test);
    firebase.db.collection("usuarios").doc(`${test.Id}`).update(test);
  }

  const Render_Aprobar = (
    revisadoPor = "",
    TestCompleto = false,
    aprobadoPor = ""
  ) => {
    if (
      revisadoPor.length > 0 &&
      revisadoPor != "sin revisado" &&
      TestCompleto
    ) {
      if (aprobadoPor.length > 0) {
        return (
          <ModalAprobarRevision
            icon="libro"
            buttonLabel="Rev.T"
            test={{ ...test }}
          />
        );
      } else {
        return (
          <ModalAprobarRevision
            icon="manito"
            buttonLabel="Rev.T"
            test={{ ...test }}
          />
        );
      }
    }
  };
  return (
    <Fragment>
      <tr>
        {/* <td onClick={()=>{EliminarTest(Id)}}>{Id}</td> */}
        {/* <td onClick={()=>{console.log(Id)}}>{Id}</td> */}
        <td>
          <p
            onClick={() => {
              // ChangeNameUsuario()
            }}
            className="m-0 p-0 tex"
          >{`${nombres.toUpperCase()} ${apellidos.toUpperCase()}`}</p>
          <p className="m-0 p-0 text-muted">{`${colegio}`} </p>
        </td>
        <td>
          {test?.fechaevaluacion ? (
            <p>
              {moment(test?.fechaevaluacion).format("DD/MM/YYYY, h:mm:ss a")}
            </p>
          ) : (
            "no tiene fecha"
          )}
          {/* <p>{moment().format('DD/MM/YYYY, h:mm:ss a')}</p> */}
        </td>
        <td>{`${telefono}`}</td>
        <td>{TestCompleto ? `Completo` : `Incompleto`}</td>
        <td>{`${revisadoPor}`}</td>
        <td>
          {test?.fechaaprobado ? (
            <p>
              {moment(new Date(test?.fechaaprobado)).format(
                "DD/MM/YYYY, h:mm:ss a"
              )}
            </p>
          ) : (
            "no tiene fecha"
          )}
          {/* {console.log('fecha aprobado ',test?.fechaaprobado)} */}
        </td>
        <td>{`${_RenderAprobado()}`}</td>
        <td>
          <div className="row m-0 p-0 justify-content-between">
            <ModalDatosPersonales buttonLabel="Datos" test={{ ...test }} />
            {TestCompleto ? (
              <ModalRevisarTest
                Revisado={TestReviado}
                buttonLabel="Rev.T"
                test={{ ...test }}
              />
            ) : null}
            {TestCompleto ? <ModalTestCompleto test={{ ...test }} /> : null}
            {/* {(aprobadoPor == '' && revisadoPor != 'sin revisado' && TestCompleto) ? (<ModalAprobarRevision buttonLabel='Rev.T' test={{...test}}/>):null} */}

            {Render_Aprobar(revisadoPor, TestCompleto, aprobadoPor)}
            {_RenderWhatapp()}

            {TestCompleto == false ? (
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  ShowModalDeleteFila(Id);
                }}
                style={{ backgroundColor: "rgba 255,80,80,1" }}
                className="IconoTrash IconosToggleModal"
              />
            ) : null}
          </div>
        </td>
      </tr>
      {/* <MySwal
              show={true}
              title="Demo"
              text="SweetAlert in React"
              onConfirm={() => {} }
            /> */}
    </Fragment>
  );
};

export default withRouter(FilaTable);
