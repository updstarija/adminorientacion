/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../StyGeneral/StyGeneral.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell,faUserTie,faWindowClose} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

const ModalDatosPersonales = (props) => {
  const {
    buttonLabel,
    className,
    test
  } = props;
  const {
    Id='1',
    nombres='Sin Nombre',
    apellidos='',
    colegio='Sin Colegio',
    telefono='Sin Celular',
    correo='Sin Correo',
    curso= 'sin Curso'
    
  } = test
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='animate__animated animate__swing'>
      <FontAwesomeIcon icon={faUserTie} onClick={toggle} className='IconosToggleModal'/>
      <Modal isOpen={modal} toggle={toggle} className='animate__animated animate__swing'>
        <ModalHeader  toggle={toggle}  >Datos Personales</ModalHeader>
        <ModalBody className='animate__animated animate__flash'>
          <p>{`Nombre: ${nombres}`}</p>
          <p>{`Colegio: ${colegio}`}</p>
          <p>{`Curso: ${curso}`}</p>
          <p>{`Celular: ${telefono}`}</p>
          {/* <p>{`Correo: ${correo}`}</p> */}

        </ModalBody>
        <ModalFooter className='row justify-content-center p-0 m-0'>
          <Button color="secondary" onClick={toggle} className='animate__animated animate__heartBeat'>
            <FontAwesomeIcon className='mr-1' icon={faWindowClose} onClick={toggle}/>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDatosPersonales;