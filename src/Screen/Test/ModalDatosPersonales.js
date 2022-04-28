/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../StyGeneral/StyGeneral.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSave,
  faUserTie,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import firebase from "../../Firebase/Firebase";

const ModalDatosPersonales = (props) => {
  const { buttonLabel, className, test } = props;
  const {
    Id = "1",
    nombres = "Sin Nombre",
    apellidos = "",
    colegio = "Sin Colegio",
    telefono = "Sin Celular",
    correo = "Sin Correo",
    curso = "sin Curso",
  } = test;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { db } = firebase;

  const updatePerson = (Id) => {
    var usuario = db.collection("usuarios").doc(`${Id}`);
    console.log(usuario);
  };

  return (
    <div className="animate__animated animate__swing">
      <FontAwesomeIcon
        icon={faUserTie}
        onClick={toggle}
        className="IconosToggleModal"
      />
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="animate__animated animate__swing"
      >
        <ModalHeader toggle={toggle}>Datos Personales</ModalHeader>
        <ModalBody className="animate__animated animate__flash">
          <p className="m-0 font-weight-bold">Nombres:</p>
          <input className="form-control mb-2 " type="text" value={nombres} />
          <p className="m-0 font-weight-bold">Apellidos:</p>
          <input className="form-control mb-2" type="text" value={apellidos} />
          <p className="m-0 font-weight-bold">Colegio:</p>
          <input
            className="form-control mb-2"
            type="text"
            value={colegio}
            readOnly
          />
          <p className="m-0 font-weight-bold">Curso:</p>
          <input
            className="form-control mb-2"
            type="text"
            value={curso}
            readOnly
          />
          <p className="m-0 font-weight-bold">Telefono:</p>
          <input className="form-control mb-2 " type="text" value={telefono} />
          {/* 
          <p>{`Nombre: ${nombres}`}</p>
          <p>{`Colegio: ${colegio}`}</p>
          <p>{`Curso: ${curso}`}</p>
          <p>{`Celular: ${telefono}`}</p> */}

          {/* <p>{`Correo: ${correo}`}</p> */}
        </ModalBody>
        <ModalFooter className="row justify-content-center p-0 m-0">
          <Button
            color="secondary"
            onClick={toggle}
            className="animate__animated animate__heartBeat"
          >
            <FontAwesomeIcon
              className="mr-1"
              icon={faSave}
              onClick={updatePerson(Id)}
            />
            Guardar
          </Button>

          <Button
            color="secondary"
            onClick={toggle}
            className="animate__animated animate__heartBeat"
          >
            <FontAwesomeIcon
              className="mr-1"
              icon={faWindowClose}
              onClick={toggle}
            />
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalDatosPersonales;
