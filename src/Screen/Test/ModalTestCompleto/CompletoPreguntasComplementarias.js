import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const CompletoPreguntasComplementarias = (props) => {
  const { test = {} } = props;
  const { preguntas = {} } = test;
  console.log("preguntas 5 ************** ", preguntas[5]);
  return (
    <Fragment>
      <h3 className="strong bg-danger text-light">
        Test 4 Preguntas Complementarias{" "}
      </h3>

      {/* Pregunta1 */}
      <strong>{preguntas[1].texto}</strong>
      <p>Resp : {preguntas[1].respuesta1}</p>
      <p>Resp : {preguntas[1].respuesta2}</p>
      <p>Resp : {preguntas[1].respuesta3}</p>
      <p>Resp : {preguntas[1].respuesta4}</p>

      {/* Pregunta2 */}
      {/* <strong>{preguntas[2].texto}</strong>
      <p>Resp : {preguntas[2].respuesta}</p>
      <p>Resp otro: {preguntas[2].otro}</p> */}

      {/* Pregunta3 */}
      {/* <strong>{preguntas[3].texto}</strong>
      <p>Resp : {preguntas[3].respuesta1}</p>
      <p>Resp : {preguntas[3].respuesta2}</p>
      <p>Resp : {preguntas[3].respuesta3}</p>
      <p>Resp : {preguntas[3].respuesta4}</p>
      <p>Resp otro: {preguntas[3].otro2}</p>
      <p>Resp otro: {preguntas[3].otro3}</p>
      <p>Resp otro: {preguntas[3].otro4}</p> */}

      {/* Pregunta4 */}
      {/* <strong>{preguntas[4].texto}</strong>
      <p>Resp : {preguntas[4].respuesta1}</p>
      <p>Resp : {preguntas[4].respuesta2}</p>
      <p>Resp : {preguntas[4].respuesta3}</p>
      <p>Resp otro: {preguntas[4].otro1}</p>
      <p>Resp otro: {preguntas[4].otro2}</p>
      <p>Resp otro: {preguntas[4].otro3}</p> */}

      {/* Pregunta5 */}
      <strong>{preguntas[2].texto}</strong>
      <br />

      {/* <ContendorRespSiNo
        pregunta='Si es una oficina'
        respuesta= {`${preguntas[5].respuesta1}`}
      />
      <ContendorRespSiNo
        pregunta='Si es en el campo'
        respuesta= {`${preguntas[5].respuesta2}`}
      />
      <ContendorRespSiNo
        pregunta='Si es en la ciudad'
        respuesta= {`${preguntas[5].respuesta3}`}
      />
      <ContendorRespSiNo
        pregunta='Si debo trabajar con personas'
        respuesta= {`${preguntas[5].respuesta4}`}
      />
      <ContendorRespSiNo
        pregunta='Si debo trabajar con máquinas'
        respuesta= {`${preguntas[5].respuesta5}`}
      />
      <ContendorRespSiNo
        pregunta='Si debo ver sangre, heridos, accidentados'
        respuesta= {`${preguntas[5].respuesta6}`}
      />
      <ContendorRespSiNo
        pregunta='Pueda ascender de puesto'
        respuesta= {`${preguntas[5].respuesta7}`}
      />
      <ContendorRespSiNo
        pregunta='Está cerca de mi familia'
        respuesta= {`${preguntas[5].respuesta8}`}
      />
      <ContendorRespSiNo
        pregunta='Está lejos de mi familia'
        respuesta= {`${preguntas[5].respuesta9}`}
      />
      <ContendorRespSiNo
        pregunta='Paguen el salario básico'
        respuesta= {`${preguntas[5].respuesta10}`}
      />
      <ContendorRespSiNo
        pregunta='Paguen un salario acorde al trabajo'
        respuesta= {`${preguntas[5].respuesta11}`}
      />
      <ContendorRespSiNo
        pregunta='Pagan el salario a tiempo'
        respuesta= {`${preguntas[5].respuesta12}`}
      />
      <ContendorRespSiNo
        pregunta='Exista acoso sexual'
        respuesta= {`${preguntas[5].respuesta13}`}
      />
      <ContendorRespSiNo
        pregunta='Me ordenen cometer actos que son delitos'
        respuesta= {`${preguntas[5].respuesta14}`}
      />
      <ContendorRespSiNo
        pregunta='Me capaciten continuamente'
        respuesta= {`${preguntas[5].respuesta15}`}
      />
      <ContendorRespSiNo
        pregunta='Trabajo normal de 8 horas'
        respuesta= {`${preguntas[5].respuesta16}`}
      />
      <ContendorRespSiNo
        pregunta='Trabajo con horas extras pagadas'
        respuesta= {`${preguntas[5].respuesta17}`}
      />
      <ContendorRespSiNo
        pregunta='Trabajo con horas extras no pagadas'
        respuesta= {`${preguntas[5].respuesta18}`}
      />
      <ContendorRespSiNo
        pregunta='Si me permita estudiar al mismo tiempo'
        respuesta= {`${preguntas[5].respuesta19}`}
      />
       <ContendorRespSiNo
        pregunta='Si tengo que trabajar los sábados (soy sabatista)'
        respuesta= {`${preguntas[5].respuesta20}`}
      />
       <ContendorRespSiNo
        pregunta='Si va en contra de mis creencias'
        respuesta= {`${preguntas[5].respuesta21}`}
      /> */}

      <ContendorRespSiNo
        pregunta="Si es una oficina y trabajo sentado"
        respuesta={`${preguntas[2].respuesta1}`}
      />
      <ContendorRespSiNo
        pregunta="Si es en el campo"
        respuesta={`${preguntas[2].respuesta2}`}
      />
      <ContendorRespSiNo
        pregunta="Si es en la ciudad"
        respuesta={`${preguntas[2].respuesta3}`}
      />
      <ContendorRespSiNo
        pregunta="Si debo trabajar con personas"
        respuesta={`${preguntas[2].respuesta4}`}
      />
      <ContendorRespSiNo
        pregunta="Si debo trabajar con máquinas"
        respuesta={`${preguntas[2].respuesta5}`}
      />
      <ContendorRespSiNo
        pregunta="Si debo ver sangre, heridos"
        respuesta={`${preguntas[2].respuesta6}`}
      />
      <ContendorRespSiNo
        pregunta="Si debo trabajar con herramientaso"
        respuesta={`${preguntas[2].respuesta7}`}
      />
      <ContendorRespSiNo
        pregunta="Si debo trabajar con animales"
        respuesta={`${preguntas[2].respuesta8}`}
      />
      {/* <ContendorRespSiNo
        pregunta="Está lejos de mi familia"
        respuesta={`${preguntas[2].respuesta9}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta="Paguen puntualmente"
        respuesta={`${preguntas[2].respuesta10}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta="Paguen un salario acorde al trabajo"
        respuesta={`${preguntas[2].respuesta11}`}
      /> */}
      <ContendorRespSiNo
        pregunta="Trabajo en equipo"
        respuesta={`${preguntas[2].respuesta9}`}
      />
      <ContendorRespSiNo
        pregunta="Cumplir turnos de trabajo (más de 8 horas)"
        respuesta={`${preguntas[2].respuesta10}`}
      />
      {/* <ContendorRespSiNo
        pregunta="Me capaciten continuamente"
        respuesta={`${preguntas[2].respuesta14}`}
      /> */}
      <ContendorRespSiNo
        pregunta="Trabajo normal de 8 horas"
        respuesta={`${preguntas[2].respuesta11}`}
      />
      <ContendorRespSiNo
        pregunta="Trabajo con viajes constantes"
        respuesta={`${preguntas[2].respuesta12}`}
      />
      {/* <ContendorRespSiNo
        pregunta="Trabajo con horas extras pagadas"
        respuesta={`${preguntas[2].respuesta17}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta="Si me permite estudiar al mismo tiempo"
        respuesta={`${preguntas[2].respuesta18}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta="Si tengo que trabajar los sábados (soy sabatista)"
        respuesta={`${preguntas[2].respuesta19}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta="Si va en contra de mis creencias"
        respuesta={`${preguntas[2].respuesta20}`}
      /> */}
      {/* <ContendorRespSiNo
        pregunta={`${preguntas[2].otro21}`}
        respuesta={`${preguntas[2].respuesta21}`}
      /> */}

      {/* Pregunta6 */}
      <br />
      {/* <strong>{preguntas[6].texto}</strong> */}
      <strong>
        Pregunta 3. ¿En qué otros trabajos imaginas poder desempeñarte si
        tendrías la posibilidad de aprenderlos y cuáles no aceptarías para nada?
      </strong>
      <br />

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Si aceptaría</th>
            <th scope="col">No aceptaría</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{preguntas[3].respuestaSi1}</td>
            <td>{preguntas[3].respuestaNo1}</td>
          </tr>
          <tr>
            <td>{preguntas[3].respuestaSi2}</td>
            <td>{preguntas[3].respuestaNo2}</td>
          </tr>
          <tr>
            <td>{preguntas[3].respuestaSi3}</td>
            <td>{preguntas[3].respuestaNo3}</td>
          </tr>
          <tr>
            <td>{preguntas[3].respuestaSi4}</td>
            <td>{preguntas[3].respuestaNo4}</td>
          </tr>
          <tr>
            <td>{preguntas[3].respuestaSi5}</td>
            <td>{preguntas[3].respuestaNo5}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default CompletoPreguntasComplementarias;

const ContendorRespSiNo = (props) => {
  const { childen, pregunta = "", respuesta = "" } = props;
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row border border-black mx-3">
        <div className="col-9">
          {/* <strong>Me gusta el dibujo lineal(hacer diseños, proyecciones)</strong> */}
          <strong>{pregunta}</strong>
        </div>
        <div className="col-3">
          <FontAwesomeIcon
            icon={respuesta == "Si" ? faCheckCircle : faTimesCircle}
            className="IconosToggleModal"
            style={{
              color: respuesta == "Si" ? "rgba(0,195,0,1)" : "rgba(195,0,0,1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
