/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../StyGeneral/StyGeneral.css'
import { connect } from "react-redux";



import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faListAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

import TestHabilidades from './ModalRevisarComponents/TestHabilidades'
import TestAptitudes from './ModalRevisarComponents/TestAptitudes'
import TestSonandoUnFuturo from './ModalRevisarComponents/TestSonandoUnFuturo';
import PreguntasCompementarias from './ModalRevisarComponents/PreguntasCompementarias'

import ButtonRevisarTest from './ModalRevisarComponents/ButtonRevisarTest'

const ModalRevisarTest = (props) => {
  const [CarrerasSeleccionadas, setCarrerasSeleccionadas] = useState([])

  const {
    Sesion={},
    buttonLabel,
    className,
    test,
  } = props;
 
  const {resumen={},resultados_carreras=[] ,Id} = test
  let {
      test1={},
      test2={},
      test3={},
      test4={},
  } = resumen
  // console.log('revisar',test)
  
  const [modal, setModal] = useState(false);



  const toggle = () => setModal(!modal);
 

  return (
    <div className='animate__animated animate__swing'>
      <FontAwesomeIcon icon={faListAlt} onClick={toggle} className='IconosToggleModal' style={{backgroundColor:props.Revisado? 'rgba(180,180,250,1)':undefined}}/>
      <Modal size='xl'  isOpen={modal} toggle={toggle} className='animate__animated animate__swing'>
        <ModalHeader toggle={toggle}>Revisar Test</ModalHeader>
        <ModalBody>
            <div className='container'>
                <TestSonandoUnFuturo test1 ={{...test1}}/>
               
                <TestHabilidades test2={{...test2}} />
                  
                <TestAptitudes test3 = {{...test3}} resumen={resumen} Id={Id} setCarrerasSeleccionadas = {setCarrerasSeleccionadas} resultados_carreras={resultados_carreras}/>

                <PreguntasCompementarias test4 = {{...test4}} />
                

            </div>



        </ModalBody>
        <ModalFooter className='row justify-content-around m-0 p-0'>
          <ButtonRevisarTest test = {{...test}} CarrerasSeleccionadas = {CarrerasSeleccionadas} toggle = {toggle}/>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    Sesion: state.SesionReducer.Sesion,
    Firebase: state.FirebaseReducer.Firebase,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRevisarTest);