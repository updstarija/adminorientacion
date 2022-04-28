/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../StyGeneral/StyGeneral.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserTie,
  faWindowClose,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import TestSonandoFuturo from "./ModalTestCompleto/TestSonandoFuturo";
import CompletoHabilidades from "./ModalTestCompleto/CompletoHabilidades";
import CompletoAptitudes from "./ModalTestCompleto/CompletoAptitudes";
import CompletoPreguntasComplementarias from "./ModalTestCompleto/CompletoPreguntasComplementarias";

const ModalTestCompleto = (props) => {
  const { buttonLabel, className, test = {} } = props;
  const { tests = {} } = test;
  const { test1 = {}, test2 = {}, test3 = {}, test4 = {} } = tests;
  //   console.log(test1)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="animate__animated animate__swing">
      <FontAwesomeIcon
        icon={faEye}
        onClick={toggle}
        className="IconosToggleModal"
      />
      <Modal
        size="xl"
        isOpen={modal}
        toggle={toggle}
        className="animate__animated animate__swing"
      >
        <ModalHeader toggle={toggle}>Test Completo</ModalHeader>
        <ModalBody className="animate__animated animate__flash">
          <TestSonandoFuturo test={{ ...test1 }} />
          <CompletoHabilidades test={{ ...test2 }} />
          <CompletoAptitudes test={{ ...test3 }} />
          <CompletoPreguntasComplementarias test={{ ...test4 }} />
        </ModalBody>
        <ModalFooter className="row justify-content-center p-0 m-0">
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

export default ModalTestCompleto;
