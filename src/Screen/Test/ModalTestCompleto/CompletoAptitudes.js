import React, { Fragment } from "react";

const CompletoAptitudes = (props) => {
  const { test = {} } = props;
  const { preguntas = [] } = test;

  function _convertNumAResult(numero) {
    switch (numero) {
      case '4':
        return "Muy bueno";
        break;
      case '3':
        return "Bastante bueno";
      case '2':
        return "Regular";
      case '1':
        return "No puedo hacerlo";
        break;
      default:
        return ' me lleva'
    }
  }
  return (
    <Fragment>
      <h3 className="strong bg-danger text-light">Test 3 Aptitudes </h3>

      {/* Pregunta1 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[1].texto}
        respuesta = {preguntas[1].respuesta}
      />

      {/* Pregunta2 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[2].texto}
        respuesta = {preguntas[2].respuesta}
      />

      {/* Pregunta3 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[3].texto}
        respuesta = {preguntas[3].respuesta}
      />

      {/* Pregunta4 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[4].texto}
        respuesta = {preguntas[4].respuesta}
      />

      {/* Pregunta5 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[5].texto}
        respuesta = {preguntas[5].respuesta}
      />

      {/* Pregunta6 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[6].texto}
        respuesta = {preguntas[6].respuesta}
      />

      {/* Pregunta7 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[7].texto}
        respuesta = {preguntas[7].respuesta}
      />

      {/* Pregunta8 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[8].texto}
        respuesta = {preguntas[8].respuesta}
      />

      {/* Pregunta9 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[9].texto}
        respuesta = {preguntas[9].respuesta}
      />

      {/* Pregunta10 */}
      <ContendorRespAptitudes
        pregunta = {preguntas[10].texto}
        respuesta = {preguntas[10].respuesta}
      />

      {/* Pregunta11 */}
      {/* <strong>{preguntas[11].texto}</strong>
      <p>Resp : {_convertNumAResult(preguntas[11].respuesta)}</p> */}
    </Fragment>
  );
};

export default CompletoAptitudes;



const ContendorRespAptitudes = (props) => {
  const {childen,pregunta='' , respuesta=''} = props
  return (
    <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3'>
          <div className='col-9'>
            {/* <strong>Me gusta el dibujo lineal(hacer diseños, proyecciones)</strong> */}
            <strong>{pregunta}</strong>
          </div>
          <div className='col-3'>
            <input 
              type="number" 
              min="1" 
              max="5" 
              // value={preguntas[1].respuesta1} disabled
              value={respuesta}
              style={{textAlign:'center'}}
            />
            {/* <p>{_ConverNumberARespuesta(preguntas[1].respuesta1)}</p> */}
          </div>
        </div>
      </div>
  )
}
