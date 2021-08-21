import React, { Fragment } from "react";

const PreguntasCompementarias = (props) => {
    const {test4} = props
    const {pregunta1 = {}, pregunta6 = {}} = test4
    const {
        respuestaSi1 = '',
        respuestaSi2 = '',
        respuestaSi3 = '',
        respuestaSi4 = '',
        respuestaSi5 = '',
        respuestaNo1 = '',
        respuestaNo2 = '',
        respuestaNo3 = '',
        respuestaNo4 = '',
        respuestaNo5 = '',
    } = pregunta6
    const {
      respuesta1 = '',
      respuesta2 = '',
      respuesta3 = '',
      respuesta4 = ''
    } = pregunta1
  return (
    <Fragment>
      <strong style={{textTransform: 'uppercase'}}>test 4 Conociéndote</strong> <br/>
      <div className='row px-3'>
        <strong>Pregunta 1 </strong> <p > &nbsp; ¿En qué trabajo te imaginas desempeñándote?  </p>
      </div>
      <table style={{ width: "100%" }} className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">¿En qué trabajo te imaginas desempeñandote?</th>
              <th scope="col">Trabajos</th>
            </tr> 
          </thead>
          <tbody>
            <tr>
              <td>Opción 1</td>
              <td>{respuesta1}</td>
            </tr>
            <tr>
              <td>Opción 2</td>
              <td>{respuesta2}</td>
            </tr>
            <tr>
              <td>Opción 3</td>
              <td>{respuesta3}</td>
            </tr>
            <tr>
              <td>Opción 4</td>
              <td>{respuesta4}</td>
            </tr>
           
          </tbody>
      </table>
      

      
      <div className='row px-3'>
        <strong>Pregunta 6 </strong> <p >&nbsp; ¿En qué otros trabajos imaginas poder desempeñarte y en cuáles no?</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <table style={{ width: "100%" }} className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th style={{width:'50%'}} scope="col">Trabajos que sí aceptaría</th>
              <th style={{width:'50%'}} scope="col">Trabajos que no aceptaría</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{respuestaSi1}</td>
              <td>{respuestaNo1}</td>
            </tr>
            <tr>
              <td>{respuestaSi2}</td>
              <td>{respuestaNo2}</td>
            </tr>
            <tr>
              <td>{respuestaSi3}</td>
              <td>{respuestaNo3}</td>
            </tr>
            <tr>
              <td>{respuestaSi4}</td>
              <td>{respuestaNo4}</td>
            </tr>
            <tr>
              <td>{respuestaSi5}</td>
              <td>{respuestaNo5}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default PreguntasCompementarias;
