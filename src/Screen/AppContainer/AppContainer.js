import React, { useEffect, Fragment, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { cargarLstTest } from "../../redux/actions/Tests.Action";
import Login from "../../Components/Login";
import RutasLogueado from "../../RutasLogueado/RutasLogueado";
import Home from "../Home/Home";
import NavBar from "../../Components/NavBar";
import {auth} from '../../FirebaseConfig'
import {CerrarSesion,abrirSesion} from '../../redux/actions/SesionAction'
import firebase from "../../Firebase/Firebase";
import app from 'firebase/app'
import 'firebase/firebase-auth'

const AppContainer = (props) => {
  //Redu Sesion
  const { Sesion, Firebase, lstTest, cargarLstTest } = props;
  const { Logueado, User } = Sesion;
  //Redux Firebase
  const { db ,} = Firebase;
  const dispatch = useDispatch()
  const [use_fire, setuse_fire] = useState(null)

  useEffect(() => {
    _ListenerAuthGoogle()
    // const obtenerTests =  db.collection("usuarios").limit(10).onSnapshot((snapshot)=>{
    const obtenerTests =  db.collection("usuarios").onSnapshot((snapshot)=>{
      // const obtenerTests =  db.collection("usuarios").where('apellidos','==','Velasquez Solano').onSnapshot((snapshot)=>{
      manejarSnapshot(snapshot)
      // snapshot.forEach( (doc)=>{
      //   console.log(doc)
      // })
    })
    return () => {
      obtenerTests();
    }
  }, []);

  const get_Lista = async ()=>{
    // const res = await db.collection('usuarios').get()
    // res.forEach(doc => {
    //   console.log(doc.data())
    // });
  }


  function _ListenerAuthGoogle(){
    auth.onAuthStateChanged((user)=>{
      console.log('user ****** ',user)
      if(user){
        setuse_fire(user)
        dispatch(abrirSesion(user))
        console.log('sesion')
      }else{ 
        console.log('sin sesion')
        dispatch(CerrarSesion())
        setuse_fire(null)
      }
    })
  }

  function manejarSnapshot(snapshot) {
    const LstTests = snapshot.docs.map((doc) => {
      return {
        Id: doc.id,
        ...doc.data(),
      };
    });
    // console.log("cargar tests");
    cargarLstTest(LstTests);
  }

  const cerrar_session = ()=>{
    firebase.auth().signOut()
  }
  async function _logoutGoogle(){
    try{
      // await Firebase.LogOut()
      console.log(firebase.auth())
      await firebase.auth().signOut()
      await firebase.auth().LogOut()
    }catch(e){
        console.log('error logOut ',e)
    }
  }

  if(!use_fire){
    return(
      <div className="row vh-100 justify-content-center align-items-center">
          <Login /> 
        </div>
    )
  }
  if(
    use_fire 
  ){
    if(use_fire){
      if(
        use_fire.email == 'becasupds@gmail.com'
        || use_fire.email == 'guitarmarce182@gmail.com'
        || use_fire.email == 'poapupds1@gmail.com'
        
      ){
        return(
             <div className=" container-fluid min-vh-100">
    
              {!Logueado ? (
                      <div className="row vh-100 justify-content-center align-items-center">
                        
                        <Login /> 
                      </div>
                    ) : (
                      <Fragment>
                        <RutasLogueado/>  
                      </Fragment>
                   )}
            </div>
        )
      }else{
        
        return (
          <>
            <button onClick={()=>_logoutGoogle()}>Cerrar Sesion</button>
            <h1>usuario {use_fire?.email} no valido</h1>
          </>
        )
      }
    }
  }
  // return (
  //   <div className=" container-fluid min-vh-100">
  //     {/* <button onClick={get_Lista}>
  //       pedir list 
  //     </button> */}
  //     {!Logueado ? (
  //       <div className="row vh-100 justify-content-center align-items-center">
  //         <Login /> 
  //       </div>
  //     ) : (
  //       <Fragment>
  //         {/* <button onClick={cerrar_session}>
  //           cerrar sesion
  //         </button> */}
  //         <RutasLogueado/>
  //       </Fragment>
  //     )}
  //   </div>
  // );
};

const mapStateToProps = (state) => {
  return {
    animalList: state.AnimalesReducer.animalList,
    Firebase: state.FirebaseReducer.Firebase,
    Sesion: state.SesionReducer.Sesion,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: (food) => dispatch(addFood(food)),
    cargarLstTest: (lst) => dispatch(cargarLstTest(lst)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
