import React, { Fragment } from "react";

const TestSonandoUnFuturo = (props) => {
  let { test1 } = props;
  const { pregunta4 = [], pregunta1 = {} } = test1;
  const { respuesta = "" } = pregunta1;

  // console.log('sonando', test1)
  return (
    <Fragment>
      <strong style={{ textTransform: "uppercase" }}>
        Test 1 Soñando un futuro
      </strong>

      <div className="row pl-3 py-0 my-0">
        <strong>Pregunta 1.- </strong> &nbsp; <p> Respuesta : </p>
        <p className="muted">&nbsp; {respuesta}</p>
      </div>

      <div className="row pl-3 py-0 my-0">
        {/* <p>Carreras Seleccionadas :</p>
                <p>{pregunta5?.respuesta1} ,</p>
                <p>{pregunta5?.respuesta2} ,</p>
                <p>{pregunta5?.respuesta3} ,</p>
                <p>{pregunta5?.respuesta4}</p> */}
        <div>
          <div className="row pl-3 py-0 my-0">
            <strong>Pregunta 4.- </strong> &nbsp;{" "}
            <p> Carreras Seleccionadas : </p>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">1. {pregunta4?.respuesta1}</li>
              <li className="list-group-item">2. {pregunta4?.respuesta2}</li>
              <li className="list-group-item">3. {pregunta4?.respuesta3}</li>
              <li className="list-group-item">4. {pregunta4?.respuesta4}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TestSonandoUnFuturo;
