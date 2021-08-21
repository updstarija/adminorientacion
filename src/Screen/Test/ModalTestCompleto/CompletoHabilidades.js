import React, { Fragment ,useEffect, useState} from "react";

const CompletoHabilidades = (props) => {
  const { test = {} } = props;
  const { preguntas = [] } = test;
  const [_Valor_A, set_Valor_A] = useState(0)
  const [_Valor_B, set_Valor_B] = useState(0)
  const [_Valor_C, set_Valor_C] = useState(0)
  const [_Valor_D, set_Valor_D] = useState(0)
  const [_Valor_E, set_Valor_E] = useState(0)
  const [_Valor_F, set_Valor_F] = useState(0)
  const [_Valor_G, set_Valor_G] = useState(0)
  const [_Valor_H, set_Valor_H] = useState(0)

  const backgroundTotal = 'rgba(210,210,210,1)'
  


  
  // console.log(preguntas)
  useEffect(() => {
    _Suma_A()
    _Suma_B()
    _Suma_C()
    _Suma_D()
    _Suma_E()
    _Suma_F()
    _Suma_G()
    _Suma_H()
  }, [])

  function _ConverNumberARespuesta(Numero) {
    switch (Numero) {
      case 5:
        // return "Mucho";
        return '5'
        break;
      case 4:
        return "Bastante";
        break;
      case 3:
        return "Regular";
        break;
      case 2:
        return "Sólo un poco";
        break;
      case 1:
        return "No me interesa";
        break;
      default:
        return "";
    }
  }
  function _Suma_A(){
    let total = 0 ;
    total += preguntas[1].respuesta1
    total += preguntas[1].respuesta2
    total += preguntas[1].respuesta3
    total += preguntas[1].respuesta4
    total += preguntas[1].respuesta5
    total += preguntas[1].respuesta6
    total += preguntas[1].respuesta7
    total += preguntas[1].respuesta8
    total += preguntas[1].respuesta9
    total += preguntas[1].respuesta10
    set_Valor_A(total)
  }
  function _Suma_B(){
    let total = 0 ;
    total += preguntas[2].respuesta1
    total += preguntas[2].respuesta2
    total += preguntas[2].respuesta3
    total += preguntas[2].respuesta4
    total += preguntas[2].respuesta5
    total += preguntas[2].respuesta6
    total += preguntas[2].respuesta7
    total += preguntas[2].respuesta8
    total += preguntas[2].respuesta9
    total += preguntas[2].respuesta10
    set_Valor_B(total)
  }
  function _Suma_C(){
    let total = 0 ;
    total += preguntas[3].respuesta1
    total += preguntas[3].respuesta2
    total += preguntas[3].respuesta3
    total += preguntas[3].respuesta4
    total += preguntas[3].respuesta5
    total += preguntas[3].respuesta6
    total += preguntas[3].respuesta7
    total += preguntas[3].respuesta8
    total += preguntas[3].respuesta9
    total += preguntas[3].respuesta10
    set_Valor_C(total)
  }
  function _Suma_D(){
    let total = 0 ;
    total += preguntas[4].respuesta1
    total += preguntas[4].respuesta2
    total += preguntas[4].respuesta3
    total += preguntas[4].respuesta4
    total += preguntas[4].respuesta5
    total += preguntas[4].respuesta6
    total += preguntas[4].respuesta7
    total += preguntas[4].respuesta8
    total += preguntas[4].respuesta9
    total += preguntas[4].respuesta10
    set_Valor_D(total)
  }
  function _Suma_E(){
    let total = 0 ;
    total += preguntas[5].respuesta1
    total += preguntas[5].respuesta2
    total += preguntas[5].respuesta3
    total += preguntas[5].respuesta4
    total += preguntas[5].respuesta5
    total += preguntas[5].respuesta6
    total += preguntas[5].respuesta7
    total += preguntas[5].respuesta8
    total += preguntas[5].respuesta9
    total += preguntas[5].respuesta10
    set_Valor_E(total)
  }
  function _Suma_F(){
    let total = 0 ;
    total += preguntas[6].respuesta1
    total += preguntas[6].respuesta2
    total += preguntas[6].respuesta3
    total += preguntas[6].respuesta4
    total += preguntas[6].respuesta5
    total += preguntas[6].respuesta6
    total += preguntas[6].respuesta7
    total += preguntas[6].respuesta8
    total += preguntas[6].respuesta9
    total += preguntas[6].respuesta10
    set_Valor_F(total)
  }
  function _Suma_G(){
    let total = 0 ;
    total += preguntas[7].respuesta1
    total += preguntas[7].respuesta2
    total += preguntas[7].respuesta3
    total += preguntas[7].respuesta4
    total += preguntas[7].respuesta5
    total += preguntas[7].respuesta6
    total += preguntas[7].respuesta7
    total += preguntas[7].respuesta8
    total += preguntas[7].respuesta9
    total += preguntas[7].respuesta10
    set_Valor_G(total)
  }
  function _Suma_H(){
    let total = 0 ;
    total += preguntas[8].respuesta1
    total += preguntas[8].respuesta2
    total += preguntas[8].respuesta3
    total += preguntas[8].respuesta4
    total += preguntas[8].respuesta5
    total += preguntas[8].respuesta6
    total += preguntas[8].respuesta7
    total += preguntas[8].respuesta8
    total += preguntas[8].respuesta9
    total += preguntas[8].respuesta10
    set_Valor_H(total)
  }

  return (
    <Fragment>
      <h3 className="strong bg-danger text-light">
        Test 2 Habilidades e Intereses{" "}
      </h3>

      {/* Pregunta1 */}
      <strong className="text-danger">{preguntas[1].texto}</strong>
      <br />
      <ContendorRespHabilidades 
        pregunta='Me gusta el dibujo lineal(hacer diseños, proyecciones)'
        respuesta= {`${preguntas[1].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy preciso y riguroso cuando dibujo'
        respuesta= {`${preguntas[1].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta reparar aparatos'
        respuesta= {`${preguntas[1].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Siempre que desmonto algo soy capaz de componerlo'
        respuesta= {`${preguntas[1].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='En mis ratos libres hago bricolaje(carpintería, plomería, electricidad,etc.)'
        respuesta= {`${preguntas[1].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='No tengo ninguna dificultad para manejar herramientas'
        respuesta= {`${preguntas[1].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy capaz de inventar cualquier objeto'
        respuesta= {`${preguntas[1].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gustaría ser diseñador(objetos, aparatos, partes de máquinas)'
        respuesta= {`${preguntas[1].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='No tengo dificultades para aprender a manejar cualquier aparato nuevo'
        respuesta= {`${preguntas[1].respuesta9}`}
      />
      <ContendorRespHabilidades 
        // pregunta='Intento estar a la última en tecnología'
        pregunta='Intento actualizarme tecnológicamente (programas, apps, aparatos, etc.)'
        respuesta= {`${preguntas[1].respuesta10}`}
      />
      <ContendorRespHabilidades 
        pregunta='Total A'
        respuesta= {`${_Valor_A}`}
        background= {backgroundTotal}
      />
      

      {/* Pregunta2 */}
      <strong className="text-danger">{preguntas[2].texto}</strong>
      <br />
      <ContendorRespHabilidades 
        pregunta='Tengo rapidez y exactitud en el cálculo mental'
        respuesta= {`${preguntas[2].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Planeo bien y sin dificultad los problemas'
        respuesta= {`${preguntas[2].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gustan las matemáticas'
        respuesta= {`${preguntas[2].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Sigo y comprendo bien las demostraciones matemáticas'
        respuesta= {`${preguntas[2].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Prefiero realizar las operaciones mentalmente sin usar la calculadora'
        respuesta= {`${preguntas[2].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Suelo hacer bien cualquier operación'
        respuesta= {`${preguntas[2].respuesta6}`}
      />
      <ContendorRespHabilidades 
        // pregunta='Tengo facilidad por entender bien las explicaciones de clase'
        pregunta='Resuelvo ejercicios de química'
        respuesta= {`${preguntas[2].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Prefiero solucionar problemas de física antes que hacer un comentario de texto'
        respuesta= {`${preguntas[2].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Hago rompecabezas con gran facilidad'
        respuesta= {`${preguntas[2].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me oriento bien sobre un mapa'
        respuesta= {`${preguntas[2].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total B'
        respuesta= {`${_Valor_B}`}
        background= {backgroundTotal}
      />

      

      {/* Pregunta3 */}

      <strong className="text-danger">{preguntas[3].texto}</strong>
      <br />
      <ContendorRespHabilidades 
        pregunta='Suelo comprender bien cualquier explicación'
        respuesta= {`${preguntas[3].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta debatir temas con otras personas'
        respuesta= {`${preguntas[3].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Encuentro con facilidad las palabras adecuadas para lo que quiero decir'
        respuesta= {`${preguntas[3].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Si me dan una palabra, tengo facilidad para encontrar sinónimos'
        respuesta= {`${preguntas[3].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta la lectura'
        respuesta= {`${preguntas[3].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy capaz de deducir el significado de diferentes términos'
        respuesta= {`${preguntas[3].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gustan los idiomas'
        respuesta= {`${preguntas[3].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que el diálogo es enriquecedor para las personas'
        respuesta= {`${preguntas[3].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Redacto bien'
        respuesta= {`${preguntas[3].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta comunicarme con los demás'
        respuesta= {`${preguntas[3].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total C'
        respuesta= {`${_Valor_C}`}
        background= {backgroundTotal}
      />


      {/* Pregunta4 */}
      <strong className="text-danger">{preguntas[4].texto}</strong>
      <br />

      <ContendorRespHabilidades 
        pregunta='Me gusta conocer gente nueva'
        respuesta= {`${preguntas[4].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy sociable y me relaciono con facilidad'
        respuesta= {`${preguntas[4].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Cuando me pierdo en una ciudad pregunto a cualquier persona'
        respuesta= {`${preguntas[4].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que hablo bien en público'
        respuesta= {`${preguntas[4].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta exponer algún tema en clase'
        respuesta= {`${preguntas[4].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que el tener amigos es muy importante para las personas'
        respuesta= {`${preguntas[4].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta aprender de los demás'
        respuesta= {`${preguntas[4].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Animo a mis amigos si se encuentran tristes'
        respuesta= {`${preguntas[4].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Suelo ser una referencia a seguir en mi grupo de amigos'
        respuesta= {`${preguntas[4].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Los demás creen que soy sociable'
        respuesta= {`${preguntas[4].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total D'
        respuesta= {`${_Valor_D}`}
        background= {backgroundTotal}
      />


      {/* Pregunta5 */}
      <strong className="text-danger">{preguntas[5].texto}</strong>
      <br />
      <ContendorRespHabilidades 
        pregunta='Tengo facilidad para tocar instrumentos musicales'
        respuesta= {`${preguntas[5].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta escuchar música'
        respuesta= {`${preguntas[5].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Mis compañeros opinan que dibujo bien'
        respuesta= {`${preguntas[5].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Se me dan bien los trabajos manuales'
        respuesta= {`${preguntas[5].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy observador'
        respuesta= {`${preguntas[5].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Cuando voy de excursión me gusta ver monumentos'
        respuesta= {`${preguntas[5].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='Conozco algunos de los museos de mi ciudad'
        respuesta= {`${preguntas[5].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Suelo llevar cámara de fotos cuando viajo'
        respuesta= {`${preguntas[5].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Puedo recordar el nombre de algunos pintores que me gustan'
        respuesta= {`${preguntas[5].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta el dibujo lineal'
        respuesta= {`${preguntas[5].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total E'
        respuesta= {`${_Valor_E}`}
        background= {backgroundTotal}
      />


      

      {/* Pregunta6 */}
      <strong className="text-danger">{preguntas[6].texto}</strong>
      <br />

      <ContendorRespHabilidades 
        pregunta='Me preocupo por la presentación de los trabajos en clase'
        respuesta= {`${preguntas[6].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy creativo'
        respuesta= {`${preguntas[6].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta que mi ropa sea diferente a la de los demás'
        respuesta= {`${preguntas[6].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Intento solucionar cualquier problema de forma alternativa'
        respuesta= {`${preguntas[6].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy receptivo ante cualquier cambio'
        respuesta= {`${preguntas[6].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que hay que actualizarse continuamente'
        respuesta= {`${preguntas[6].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='Mis amigos piensan que soy “un poco diferente”'
        respuesta= {`${preguntas[6].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Tengo rapidez en la solución de cualquier problema'
        respuesta= {`${preguntas[6].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy bastante bueno cuando dibujo'
        respuesta= {`${preguntas[6].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Soy capaz de inventar juegos nuevos'
        respuesta= {`${preguntas[6].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total F'
        respuesta= {`${_Valor_F}`}
        background= {backgroundTotal}
      />



      {/* Pregunta7 */}
      <strong className="text-danger">{preguntas[7].texto}</strong>
      <br />

      <ContendorRespHabilidades 
        pregunta='Me preocupa el cuidado de la naturaleza'
        respuesta= {`${preguntas[7].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que es lamentable que se destruya nuestro entorno natural'
        respuesta= {`${preguntas[7].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gusta salir de excursión al campo'
        respuesta= {`${preguntas[7].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Reciclo la basura'
        respuesta= {`${preguntas[7].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Creo que a través de la física y química podemos comprender mejor el entorno'
        respuesta= {`${preguntas[7].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me gustan los animales'
        respuesta= {`${preguntas[7].respuesta6}`}
      />
      <ContendorRespHabilidades 
        // pregunta='Cuando salgo al campo busco piedras “bonitas”'
        pregunta='Cuando salgo al campo valoro la diversidad de animales y plantas'
        respuesta= {`${preguntas[7].respuesta7}`}
      />
      <ContendorRespHabilidades 
        // pregunta='Me gustaría hacer bucear bajo el mar'
        pregunta='Me gustaría bucear bajo el mar para conocer la flora y fauna marina'
        respuesta= {`${preguntas[7].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me apena cuando un animal enferma'
        respuesta= {`${preguntas[7].respuesta9}`}
      />
      <ContendorRespHabilidades 
        // pregunta='Suelo dibujar mi entorno'
        pregunta='Me gustaría cultivar mis propios alimentos'
        respuesta= {`${preguntas[7].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total G'
        respuesta= {`${_Valor_G}`}
        background= {backgroundTotal}
      />



      {/* Pregunta8 */}
      <strong className="text-danger">{preguntas[8].texto}</strong>
      <br />
      <ContendorRespHabilidades 
        pregunta='Realizo algún deporte'
        respuesta= {`${preguntas[8].respuesta1}`}
      />
      <ContendorRespHabilidades 
        pregunta='Considero que la higiene y el cuidado personal son importantes'
        respuesta= {`${preguntas[8].respuesta2}`}
      />
      <ContendorRespHabilidades 
        pregunta='Procuro comer equilibradamente'
        respuesta= {`${preguntas[8].respuesta3}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me preocupa mi imagen personal'
        respuesta= {`${preguntas[8].respuesta4}`}
      />
      <ContendorRespHabilidades 
        pregunta='Me preocupa cuando alguien está enfermo'
        respuesta= {`${preguntas[8].respuesta5}`}
      />
      <ContendorRespHabilidades 
        pregunta='Es necesario preocuparse por los demás para sentirse bien consigo mismo'
        respuesta= {`${preguntas[8].respuesta6}`}
      />
      <ContendorRespHabilidades 
        pregunta='En mi escala de valores la salud es lo primero'
        respuesta= {`${preguntas[8].respuesta7}`}
      />
      <ContendorRespHabilidades 
        pregunta='Cuando me pongo enfermo siempre acudo al médico'
        respuesta= {`${preguntas[8].respuesta8}`}
      />
      <ContendorRespHabilidades 
        pregunta='Mis amigos me piden apoyo y confían en mí'
        respuesta= {`${preguntas[8].respuesta9}`}
      />
      <ContendorRespHabilidades 
        pregunta='Intento ayudar a los demás'
        respuesta= {`${preguntas[8].respuesta10}`}
      />

      <ContendorRespHabilidades 
        pregunta='Total H'
        respuesta= {`${_Valor_H}`}
        background= {backgroundTotal}
      />

    </Fragment>
  );
};

export default CompletoHabilidades;






const ContendorRespHabilidades = (props) => {
  const {childen,pregunta='' , respuesta='',background=''} = props
  return (
    <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3' style={{backgroundColor:background}}>
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
