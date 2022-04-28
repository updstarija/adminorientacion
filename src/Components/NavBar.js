import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faList } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import firebase from "../Firebase/Firebase";

const NavBar = (props) => {
  const { history } = props;

  const Store = useSelector((state) => state);
  const { FirebaseReducer } = Store;
  const { Firebase } = FirebaseReducer;
  const { auth } = Firebase;
  console.log(Firebase);
  console.log("store navbar ", Store);

  const { SesionReducer = {} } = Store;
  const { Sesion = {} } = SesionReducer;
  const { User = {} } = Sesion;
  const { displayName = "sin sesion" } = User;
  console.log("sesion en navbar ", SesionReducer);

  async function _logoutGoogle() {
    try {
      // await Firebase.LogOut()
      console.log(firebase.auth());
      await firebase.auth().signOut();
      await firebase.auth().LogOut();
    } catch (e) {
      console.log("error logOut ", e);
    }
  }

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          onClick={() => {
            history.push("/");
          }}
        >
          <span style={{ color: "#223B82" }} className="font-weight-bold">
            UPDS
          </span>
        </a>
        {/* <span> mi nombre sesion : {displayName}</span> */}
        {/* <Link className='navbar-brand' to={'/'}>UPDS</Link> */}
        {/* <p>{firebase.auth().currentUser.displayName}</p> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {/* <a
                className="nav-link"
                onClick={() => {
                  history.push("Test");
                }}
                // href="/Test"
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="mr-1"
                  style={{ color: "#223B82" }}
                />
                Test <span className="sr-only">(current)</span>
              </a> */}
              <a
                className="nav-link"
                onClick={() => {
                  history.push("/Test");
                }}
                //href="/AdminTest/#/Test"
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="mr-1"
                  style={{ color: "#223B82" }}
                />
                Test
              </a>
              {/* <Link to={'/Test'}>Test</Link> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AdminTest/#/ExelEstudiantes">
                <FontAwesomeIcon
                  style={{
                    color: "#217346",
                  }}
                  icon={faFileExcel}
                  className="mr-1"
                />
                Excel Estudiantes
              </a>
            </li>

            <li></li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => {
            _logoutGoogle();
          }}
          className="btn btn-danger"
        >
          Cerrar Sesion
        </button>
      </nav>
    </Fragment>
  );
};

export default withRouter(NavBar);
