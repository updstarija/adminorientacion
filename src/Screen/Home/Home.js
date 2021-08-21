import React, { useEffect } from 'react'
import Login from '../../Components/Login'
import { connect } from 'react-redux';

import {cargarLstTest} from '../../redux/actions/Tests.Action'
import NavBar from '../../Components/NavBar';
import RutasLogueado from '../../RutasLogueado/RutasLogueado';
import firebase from '../../Firebase/Firebase';


const Home = (props) => {
    //Redu Sesion
    const { Sesion, Firebase, lstTest, cargarLstTest} = props;
    const {Logueado , User} = Sesion
    //Redux Firebase
    const {db} = Firebase


    // useEffect(() => {
    //   const obtenerTests = async ()=> {
    //     db.collection('usuarios').onSnapshot(manejarSnapshot)
    //   }
    //   return () => {
    //     obtenerTests()
    //   }

    // },[]);
   

    function manejarSnapshot(snapshot){
      // const LstTests = snapshot.docs.map((doc)=>{
      //   return {
      //     Id : doc.id,
      //     ...doc.data()
      //   }
      // })
      // cargarLstTest(LstTests)
    }

    return (
      <div className=" container-fluid min-vh-100 ">
        <p>mi home</p>
        {/* <button onClick={()=>{console.log(firebase.auth().currentUser)}}>
            <p>ver user</p>
          </button> */}
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
    animalList: state.AnimalesReducer.animalList,
    Firebase: state.FirebaseReducer.Firebase,
    Sesion : state.SesionReducer.Sesion,
  
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      // add: (food) => dispatch(addFood(food)),
      cargarLstTest: (lst) => dispatch(cargarLstTest(lst))
  
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);
  