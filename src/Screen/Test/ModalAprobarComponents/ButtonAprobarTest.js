import React, { Fragment } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "reactstrap";
import { connect } from "react-redux";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell,faThumbsUp,faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,} from '@fortawesome/free-brands-svg-icons'
import firebase from "../../../Firebase/Firebase";


const MySwal = withReactContent(Swal);
function _ShowSwallOk() {
  MySwal.fire({
    title: <p>Aprobado Ok</p>,
    // footer: "Copyright 2018",
    onOpen: () => {
      // `MySwal` is a subclass of `Swal`
      //   with all the same instance & static methods
      MySwal.clickConfirm();
    },
  }).then(() => {
    return MySwal.fire(<p>Aprobado Ok</p>);
  });
}

function _ShowSwallError() {
  Swal.fire({
    icon: 'error',
    title: 'Error Al Aprobar Test',
    text: 'Se a Producido Un Error Intente de Nuevo!',
    // footer: '<a href>Why do I have this issue?</a>'
  })
}

const ButtonAprobarTest = (props) => {
  const {toggle} = props
  const {test = {}} = props
  const {Id = ''} = test
  const { Sesion = {}, Firebase } = props;
  const { db } = Firebase;
  const { Logueado = false, User = {} } = Sesion;
  const { displayName = "", email = "", photoURL = "" } = User;

  const _AprobarTest = () => {
    var usuarios = db.collection("usuarios").doc(`${Id}`);
    // Set the "capital" field of the city 'DC'
    let Fecha = new Date()
    return usuarios
      .update({
        aprobadoPor: `${firebase.auth().currentUser.email}`,
        calificado: true,
        fechaaprobado: Fecha.valueOf()
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
    // toggle();
  };
  return (
    <Fragment>
      <Button color="secondary" onClick={()=>{_AprobarTest()}}>
        <FontAwesomeIcon className="mr-1" icon={faThumbsUp} onClick={toggle} />
        Aprobar
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAprobarTest);
