import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'
  import Home from '../Screen/Home/Home'
  import Test from '../Screen/Test/Test'
  import ExelEstudiante from '../Screen/ExelEstudiantes/index'
import NavBar from '../Components/NavBar'
import firebase from '../Firebase/Firebase'


const RutasLogueado = () => {
    return (
      <div>
        <Router>
          <NavBar/>
          <p>{firebase.auth().currentUser.displayName} - {firebase.auth().currentUser.email} </p>
          <Switch>
            <Route path="/" exact>
              {/* <Link to={'/Test'}>anchorText</Link> */}
              <Home/>
              
            </Route>

            <Route path="/Test" exact>
              < Test/>
            </Route>
            <Route path="/ExelEstudiantes" exact>
              < ExelEstudiante/>
            </Route>
            
          </Switch>
        </Router>
      </div>
    )
}

export default RutasLogueado;
