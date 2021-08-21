

import React, { Fragment } from 'react'
import { connect } from 'react-redux';
// import firebase from '../Firebase/Firebase';
import app from "firebase";
// import "firebase/firestore";
import 'firebase/firebase-auth'

import {abrirSesion} from '../redux/actions/SesionAction'





const Login = (props) => {
    const {Firebase,abrirSesion} = props
    const {_LoguearGoogle} = Firebase

    async function _Loguear() {
        // let Resul = await _LoguearGoogle()
        // const {user} = Resul
        // abrirSesion(user)
        let provider = new app.auth.GoogleAuthProvider();
        // await app.auth().setPersistence('none')
        const res = await app.auth().signInWithPopup(provider)
        abrirSesion(res)
        // console.log('result loguear ', res)
    }
    function VerProps(){
        console.log(props)
    }

    return (
        <Fragment>
            <div className='animate__animated animate__wobble '>
                <button type="button" 
                    onClick={()=>{_Loguear()}}
                    className="btn btn-primary">
                    Iniciar Sesion Con Google
                </button>
            </div>

            {/* <button type="button" 
                onClick={()=>{VerProps()}}
                className="btn btn-primary">
                Ver Props
            </button> */}
            
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
        animalList: state.AnimalesReducer.animalList,
        Firebase: state.FirebaseReducer.Firebase,
        Sesion: state.SesionReducer.Sesion,
        lstTest: state.TestsReducer.lstTest
  
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      abrirSesion: (user) => dispatch(abrirSesion(user)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
