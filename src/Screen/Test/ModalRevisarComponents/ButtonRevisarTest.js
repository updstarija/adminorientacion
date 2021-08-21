import React, { Fragment } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import firebase from "../../../Firebase/Firebase";

const MySwal = withReactContent(Swal);
const _RevisarTest = () => {};
function _ShowSwallOk() {
  MySwal.fire({
    title: <p>Revisado Ok</p>,
    // footer: "Copyright 2018",
    onOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm();
    },
  }).then(() => {
    return MySwal.fire(<p>Revisado Ok</p>);
  });
}

function _ShowSwallError() {
  Swal.fire({
    icon: 'error',
    title: 'Error Al Revisar',
    text: 'Se a Producido Un Error Intente de Nuevo!',
    // footer: '<a href>Why do I have this issue?</a>'
  })
}

const ButtonRevisarTest = (props) => {
  const {toggle} = props
  const {test = {}, CarrerasSeleccionadas = []} = props
  const {Id = ''} = test
  const { Sesion = {}, Firebase } = props;
  const { db } = Firebase;
  const { Logueado = false, User = {} } = Sesion;
  const { displayName = "", email = "", photoURL = "" } = User;


  const _RevisarTest = () => {
    alert(displayName)
    var usuarios = db.collection("usuarios").doc(`${Id}`);
    console.log(CarrerasSeleccionadas)
    return usuarios
      .update({
        // revisadoPor: `${displayName}`,
        revisadoPor: firebase.auth().currentUser.email,
        resultados_carreras : CarrerasSeleccionadas
      })
      .then(function () {
        console.log("Document successfully updated!");
        toggle();
        _ShowSwallOk()
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        toggle();
        _ShowSwallError()
      });
    toggle();
  };
  return (
    <Fragment>
      <Button
        color="secondary"
        onClick={() => {
          _RevisarTest();
        }}
      >
        Revisar Test
      </Button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    Sesion: state.SesionReducer.Sesion,
    Firebase: state.FirebaseReducer.Firebase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRevisarTest);
