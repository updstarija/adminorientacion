import React, { Fragment,useEffect } from 'react'

const   TestSonandoFuturo = (props) => {
    const {test = []} = props
    const {preguntas = []} = test
    
    // if(test.preguntas.length > 0){
    //     console.log('ess mayor')
    //     PreguntasConRespuestas = test.shift()
    // }
    return (
        <Fragment>
            <h3 className=' strong bg-danger text-light'>Test Soñando Futuro</h3>

            {/* Pregunta1 */}
            {/* {console.log(preguntas)} */}
            <strong>{preguntas[1].texto}</strong>
            <p>Resp: {preguntas[1].respuesta}</p>

            {/* Pregunta2 */}
            <strong>{preguntas[2].texto}</strong>
            <p>Resp 1: {preguntas[2].respuesta1}</p>
            <p>Resp 2: {preguntas[2].respuesta2}</p>
            {console.log(preguntas[2].otro1 == "" )}
            {preguntas[2].otro1 != "" ? <p>Resp Otro 1: {preguntas[2].otro1}</p> :null}
            {preguntas[2].otro2 != "" ? <p>Resp Otro 2: {preguntas[2].otro2}</p> :null}
            

            {/* Pregunta3 */}
            <strong>{preguntas[3].texto}</strong>
            <p>Resp: {preguntas[3].respuesta}</p>
            {preguntas[3].otro != "" ? <p>Resp Otro: {preguntas[3].otro}</p> :null}

            

            {/* Pregunta4 */}
            <strong>{preguntas[4].texto}</strong>
            <p>Resp: {preguntas[4].respuesta}</p>
            {preguntas[4].otro != "" ? <p>Resp Otro: {preguntas[4].otro}</p> :null}

            {/* Pregunta5*/}
            <strong>{preguntas[5].texto}</strong>
            <p>Resp: {preguntas[5].respuesta1}</p>
            <p>Resp: {preguntas[5].respuesta2}</p>
            <p>Resp: {preguntas[5].respuesta3}</p>
            <p>Resp: {preguntas[5].respuesta4}</p>

            {/* Pregunta6*/}
            <strong>{preguntas[6].texto}</strong>
            <p>Resp: {preguntas[6].respuesta}</p>
            {preguntas[6].otro != "" ? <p>Resp Otro: {preguntas[6].otro}</p> :null}


            {/* Pregunta7*/}
            <strong>{preguntas[7].texto}</strong>
            <p>Resp: {preguntas[7].respuesta1}</p>
            <p>Resp: {preguntas[7].respuesta2}</p>
            <p>Resp: {preguntas[7].respuesta3}</p>
            {preguntas[7].otro1 != "" ? <p>Resp Otro: {preguntas[7].otro1}</p> :null}
            {preguntas[7].otro2 != "" ? <p>Resp Otro: {preguntas[7].otro2}</p> :null}
            {preguntas[7].otro3 != "" ? <p>Resp Otro: {preguntas[7].otro3}</p> :null}

            {/* Pregunta8*/}
            <strong>{preguntas[8].texto}</strong>
            <p>Resp: {preguntas[8].respuesta1}</p>
            <p>Resp: {preguntas[8].respuesta2}</p>
            <p>Resp: {preguntas[8].respuesta3}</p>
            {preguntas[8].otro1 != "" ? <p>Resp Otro: {preguntas[8].otro1}</p> :null}
            {preguntas[8].otro2 != "" ? <p>Resp Otro: {preguntas[8].otro2}</p> :null}
            {preguntas[8].otro3 != "" ? <p>Resp Otro: {preguntas[8].otro3}</p> :null}

            {/* Pregunta9*/}
            <strong>{preguntas[9].texto}</strong>
            <p>Resp: {preguntas[9].respuesta1}</p>
            <p>Resp: {preguntas[9].respuesta2}</p>
            <p>Resp: {preguntas[9].respuesta3}</p>
            {preguntas[9].otro1 != "" ? <p>Resp Otro: {preguntas[9].otro1}</p> :null}
            {preguntas[9].otro2 != "" ? <p>Resp Otro: {preguntas[9].otro2}</p> :null}
            {preguntas[9].otro3 != "" ? <p>Resp Otro: {preguntas[9].otro3}</p> :null}

            {/* Pregunta10*/}
            <strong>{preguntas[10].texto}</strong>
            <p>Resp: {preguntas[10].respuesta1}</p>
            <p>Resp: {preguntas[10].respuesta2}</p>
            <p>Resp: {preguntas[10].respuesta3}</p>
            {preguntas[10].otro1 != "" ? <p>Resp Otro: {preguntas[10].otro1}</p> :null}
            {preguntas[10].otro2 != "" ? <p>Resp Otro: {preguntas[10].otro2}</p> :null}
            {preguntas[10].otro3 != "" ? <p>Resp Otro: {preguntas[10].otro3}</p> :null}

            {/* Pregunta11*/}
            <strong>{preguntas[11].texto}</strong>
            <p>Resp: {preguntas[11].respuesta1}</p>
            <p>Resp: {preguntas[11].respuesta2}</p>
            <p>Resp: {preguntas[11].respuesta3}</p>
            {preguntas[11].otro1 != "" ? <p>Resp Otro: {preguntas[11].otro1}</p> :null}
            {preguntas[11].otro2 != "" ? <p>Resp Otro: {preguntas[11].otro2}</p> :null}
            {preguntas[11].otro3 != "" ? <p>Resp Otro: {preguntas[11].otro3}</p> :null}

            {/* Pregunta12*/}
            <strong>{preguntas[12].texto}</strong>
            {console.log(preguntas[12])}
            <p>Resp: {preguntas[12].respuesta1}</p>
            <p>Resp: {preguntas[12].respuesta2}</p>
            <p>Resp: {preguntas[12].respuesta3}</p>
            {preguntas[12].otro1 != "" ? <p>Resp Otro: {preguntas[12].otro1}</p> :null}
            {preguntas[12].otro2 != "" ? <p>Resp Otro: {preguntas[12].otro2}</p> :null}
            {preguntas[12].otro3 != "" ? <p>Resp Otro: {preguntas[12].otro3}</p> :null}

        </Fragment>
    )
}

export default TestSonandoFuturo;

