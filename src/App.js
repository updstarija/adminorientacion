import React,{useEffect} from 'react';
import './App.css';
import db , {auth,firebase} from './FirebaseConfig'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Provider, useDispatch } from 'react-redux';
import configureStore from './redux/store'



import NavBar from './Components/NavBar'
import RutasLogueado from './RutasLogueado/RutasLogueado'
import AppContainer from './Screen/AppContainer/AppContainer'


const store = configureStore();


function App() {


  function Loguear(){
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result)=>{
      // console.log(result)
    })
  }
 

  return (
    <div className="App min-vh-100">
      <Provider store={store}>
        {/* <NavBar />
        <RutasLogueado/> */}
        <AppContainer/>
        
      </Provider>
    </div>
  );
}

export default App;
