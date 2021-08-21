import React, { Fragment, useEffect, Uses, useState } from "react";
import GruposConCarreras from "../../../Data/GruposConCarreras";
import { connect } from "react-redux";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faPlusCircle,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const TestAptitudes = (props) => {
    const [Actualizar, setActualizar] = useState(true)
    let { test3 = {},resultados_carreras=[], setCarrerasSeleccionadas ,Id,Firebase, resumen} = props;
    const {db} = Firebase
    const { grupos = [] ,
      grupos_todo = [],
      grupos_total_test3 = []
    } = test3;
    let GruposTestAptitudes = [];
    let {
      grupo1={},
      grupo2={},
      grupo3={},
      grupo4={},
      grupo5={},
      grupo6={},
      grupo7={},
      grupo8={},
      grupo9={},
      grupo10={},
    } = grupos_total_test3
    console.log('******************')

    const Agregar_Texto_a_Grupo_De_la_lista = (num_grupo)=>{
      switch (num_grupo) {
        case 1:
          return 'GRUPO 1 - APTITUDES MANUALES O MECÁNICAS'
          break;
        case 2:
          return 'GRUPO 2 - APTITUDES PARA EL DEPORTE Y ACTIVIDADES AL AIRE LIBRE'
          break;
        case 3:
          return 'GRUPO 3 - HABILIDADES PARA ACABAR LAS COSAS Y SER DETALLISTAS'
          break;
        case 4:
          return 'GRUPO 4 - HABILIDADES PARA EL MANEJO DE CIFRAS, NÚMEROS Y CONTROL DEL GASTO'
          break;
        case 5:
          return 'GRUPO 5 - HABILIDADES PARA INFLUIR, PERSUADIR, ATENDER'
          break;
        case 6:
          return 'GRUPO 6 - APTITUDES ARTÍSTICAS, MANIPULATIVAS O DE MANEJO DE LAS COSAS'
          break;
        case 7:
          return 'GRUPO 7 - APTITUDES LINGUÍSTICA, DE LECTURA Y ESCRITURA'
          break;
        case 8:
          return 'GRUPO 8 - APTITUDES PARA PLANIFICAR, ORGANIZAR, DIRIGIR'
          break;
        case 9:
          return 'GRUPO 9 - APTITUDES PARA ENSEÑAR, EDUCAR, AYUDAR'
          break;
        case 10:
          return 'GRUPO 10 - APTITUDES PARA EL ARTE, LA CREATIVIDAD Y LA INNOVACIÓN'
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          break;
      }
    }
    
    let list_grupos_total_test3 = []
    Object.keys(grupos_total_test3).forEach((key)=>{
      const num_grupo = parseInt(key.split('grupo')[1])
      let temp = {...grupos_total_test3[key]}
      temp.name_grupo = key
      temp.num_grupo = num_grupo
      temp.texto_grupo = Agregar_Texto_a_Grupo_De_la_lista(num_grupo)
      list_grupos_total_test3.push(temp)
      
    })
    list_grupos_total_test3.sort((a, b) => (a.valor < b.valor) ? 1 : -1)



    console.log(list_grupos_total_test3)
    console.log('mis props ',props)
  const ColorVerde = 'rgba(0,255,0,0.5)'
  const ColorAmarillo = 'rgba(255,255,0,5)'

  const [GruposSelect, setGruposSelect] = useState([]);
  const [Prioridad, setPrioridad] = useState(1);
  
  // const [DropDownGrupo, setDropDownGrupo] = useState(false);
  // const [DropDownCarrera, setDropDownCarrera] = useState(false)
  const [GropoSeleccionado, setGropoSeleccionado] = useState({ Carreras: [] });

  const [ValueSelecGrup, setValueSelecGrup] = useState("Seleccione Grupo");
  const [ValueSelecCarrera, setValueSelecCarrera] = useState(
    ""
  );
  const [lstCarrerasSeleccionadas, setlstCarrerasSeleccionadas] = useState(resultados_carreras);

  useEffect(() => {
    _OrdenarCarrerlasSelecionadas()
    _CargarSelecGrupos()
    // _ChangeCheckboxGrupos()
    _SetGrupostestAptitudes();
    setGruposSelect(GruposTestAptitudes);
    GruposTestAptitudes.forEach((element) => {
      // console.log('grupo 1',GruposConCarreras.GRUPO1[1])
    });
  }, [Actualizar]);

  

  // const toggleSelectGrupo = () => setDropDownGrupo(prevState => !prevState);
  // const toggleSelectCarrera = () => setDropDownCarrera(prevState => !prevState);

  function _OrdenarCarrerlasSelecionadas(){
    console.log(lstCarrerasSeleccionadas)
    let temp = lstCarrerasSeleccionadas.sort(function (a, b) {
      if (a.prioridad > b.prioridad) {
        return 1;
      }
      if (a.prioridad < b.prioridad) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    setCarrerasSeleccionadas(temp)
  }
  function AtuzalirUseefec(){
    setActualizar(!Actualizar)
  }
  function ValidarCantGruposValidados(){
    let cant = 0
    if(grupo1.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo2.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo3.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo4.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo5.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo6.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo7.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo8.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo9.validadoPorConsultor){
      cant = cant +1
    }
    if(grupo10.validadoPorConsultor){
      cant = cant +1
    }
    console.log('cantidad ', cant)
    if(cant < 2){
      return true
    }else{
      return false
    }

  }

  function _CargarSelecGrupos(){
    console.log('grupos select', GruposTestAptitudes)
  }
 
  const _ChangeCheckboxGrupos = (NumeroGrupo) => {
    
    let resume =  {...resumen}

    switch (NumeroGrupo) {
      case 1:
          resume.test3.grupos_total_test3.grupo1.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo1.selectPorConsultor
          resume.test3.grupos_total_test3.grupo1.validadoPorConsultor = false

        break;
      case 2:
          resume.test3.grupos_total_test3.grupo2.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo2.selectPorConsultor
          resume.test3.grupos_total_test3.grupo2.validadoPorConsultor = false
        break;
      case 3:
          resume.test3.grupos_total_test3.grupo3.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo3.selectPorConsultor
          resume.test3.grupos_total_test3.grupo3.validadoPorConsultor = false
        break;
      case 4:
          resume.test3.grupos_total_test3.grupo4.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo4.selectPorConsultor
          resume.test3.grupos_total_test3.grupo4.validadoPorConsultor = false
        break;
      case 5:
          resume.test3.grupos_total_test3.grupo5.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo5.selectPorConsultor
          resume.test3.grupos_total_test3.grupo5.validadoPorConsultor = false
        break;
      case 6:
          resume.test3.grupos_total_test3.grupo6.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo6.selectPorConsultor
          resume.test3.grupos_total_test3.grupo6.validadoPorConsultor = false
        break;
      case 7:
          resume.test3.grupos_total_test3.grupo7.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo7.selectPorConsultor
          resume.test3.grupos_total_test3.grupo7.validadoPorConsultor = false
        break;
      case 8:
          resume.test3.grupos_total_test3.grupo8.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo8.selectPorConsultor
          resume.test3.grupos_total_test3.grupo8.validadoPorConsultor = false
        break;
      case 9:
          resume.test3.grupos_total_test3.grupo9.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo9.selectPorConsultor
          resume.test3.grupos_total_test3.grupo9.validadoPorConsultor = false
        break;
      case 10:
          resume.test3.grupos_total_test3.grupo10.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo10.selectPorConsultor
          resume.test3.grupos_total_test3.grupo10.validadoPorConsultor = false
        break;
        
    
      default:
        break;
    }
    // resume.test3.grupos_total_test3 = {...grupos_total_test3,agredado:'agre'}
    // resume.test3.grupos_total_test3.grupo1.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo1.selectPorConsultor
    console.log('jaja ', resume)
    var usuarios = db.collection("usuarios").doc(`${Id}`);
    return usuarios
      .update({
        resumen : resume
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };
  const _ChangeCheckboxValidado = (NumeroGrupo) => {

    let resume =  {...resumen}

    switch (NumeroGrupo) {
      case 1:
          if(resume.test3.grupos_total_test3.grupo1.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo1.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo1.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo1.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo1.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 2:
          if(resume.test3.grupos_total_test3.grupo2.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo2.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo2.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo2.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo2.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 3:
          if(resume.test3.grupos_total_test3.grupo3.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo3.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo3.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo3.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo3.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 4:
          if(resume.test3.grupos_total_test3.grupo4.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo4.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo4.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo4.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo4.validadoPorConsultor
          }
        AtuzalirUseefec()
        break;
      case 5:
          if(resume.test3.grupos_total_test3.grupo5.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo5.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo5.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo5.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo5.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 6:
          if(resume.test3.grupos_total_test3.grupo6.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo6.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo6.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo6.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo6.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 7:
          if(resume.test3.grupos_total_test3.grupo7.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo7.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo7.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo7.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo7.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 8:
          if(resume.test3.grupos_total_test3.grupo8.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo8.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo8.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo8.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo8.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 9:
          if(resume.test3.grupos_total_test3.grupo9.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo9.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo9.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo9.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo9.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
      case 10:
          if(resume.test3.grupos_total_test3.grupo10.validadoPorConsultor){
            resume.test3.grupos_total_test3.grupo10.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo10.validadoPorConsultor 
          }else if(ValidarCantGruposValidados()){
            resume.test3.grupos_total_test3.grupo10.validadoPorConsultor = !  resume.test3.grupos_total_test3.grupo10.validadoPorConsultor
          }
          AtuzalirUseefec()
        break;
        
    
      default:
        break;

        
    }
    // resume.test3.grupos_total_test3 = {...grupos_total_test3,agredado:'agre'}
    // resume.test3.grupos_total_test3.grupo1.selectPorConsultor = !  resume.test3.grupos_total_test3.grupo1.selectPorConsultor
    console.log('jaja ', resume)
    var usuarios = db.collection("usuarios").doc(`${Id}`);
    return usuarios
      .update({
        resumen : resume
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };
  
  function _SetGrupostestAptitudes() {
    if( grupos_total_test3.grupo1.validadoPorConsultor && (grupos_total_test3.grupo1.selectPorConsultor || grupos_total_test3.grupo1.selectPorUser )){
        GruposTestAptitudes.push({
          NumGrupo: "GRUPO1",
          NomMostrar: "Grupo 1",
          Carreras: GruposConCarreras.GRUPO1,
        });
    }
    if( grupos_total_test3.grupo2.validadoPorConsultor && (grupos_total_test3.grupo2.selectPorConsultor || grupos_total_test3.grupo2.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO2",
          NomMostrar: "Grupo 2",
          Carreras: GruposConCarreras.GRUPO2,
        });
    }
    if( grupos_total_test3.grupo3.validadoPorConsultor && (grupos_total_test3.grupo3.selectPorConsultor || grupos_total_test3.grupo3.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO3",
          NomMostrar: "Grupo 3",
          Carreras: GruposConCarreras.GRUPO3,
        });
    }
    if( grupos_total_test3.grupo4.validadoPorConsultor && (grupos_total_test3.grupo4.selectPorConsultor || grupos_total_test3.grupo4.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO4",
          NomMostrar: "Grupo 4",
          Carreras: GruposConCarreras.GRUPO4,
        });
    }
    if( grupos_total_test3.grupo5.validadoPorConsultor && (grupos_total_test3.grupo5.selectPorConsultor || grupos_total_test3.grupo5.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO5",
          NomMostrar: "Grupo 5",
          Carreras: GruposConCarreras.GRUPO5,
        });
    }
    if( grupos_total_test3.grupo6.validadoPorConsultor && (grupos_total_test3.grupo6.selectPorConsultor || grupos_total_test3.grupo6.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO6",
          NomMostrar: "Grupo 6",
          Carreras: GruposConCarreras.GRUPO6,
        });
    }
    if( grupos_total_test3.grupo7.validadoPorConsultor && (grupos_total_test3.grupo7.selectPorConsultor || grupos_total_test3.grupo7.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO7",
          NomMostrar: "Grupo 7",
          Carreras: GruposConCarreras.GRUPO7,
        });
    }
    if( grupos_total_test3.grupo8.validadoPorConsultor && (grupos_total_test3.grupo8.selectPorConsultor || grupos_total_test3.grupo8.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO8",
          NomMostrar: "Grupo 8",
          Carreras: GruposConCarreras.GRUPO8,
        });
    }
    if( grupos_total_test3.grupo9.validadoPorConsultor && (grupos_total_test3.grupo9.selectPorConsultor || grupos_total_test3.grupo9.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO9",
          NomMostrar: "Grupo 9",
          Carreras: GruposConCarreras.GRUPO9,
        });
    }
    if( grupos_total_test3.grupo10.validadoPorConsultor && (grupos_total_test3.grupo10.selectPorConsultor || grupos_total_test3.grupo10.selectPorUser )){        
      GruposTestAptitudes.push({
          NumGrupo: "GRUPO10",
          NomMostrar: "Grupo 10",
          Carreras: GruposConCarreras.GRUPO10,
        });
    }
    setGruposSelect(GruposTestAptitudes)
    //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO4",
      //     NomMostrar: "Grupo 4",
      //     Carreras: GruposConCarreras.GRUPO4,
      //   });
    // console.log('grupo test 3 ', grupos_total_test3.grupo1.validadoPorConsultor)
    // grupos_total_test3.forEach((grupo) => {
      // let grup = Object.keys(grupo)[0];
      // console.log('validar ', grupo)
      // if (grup === "grupo1") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO1",
      //     NomMostrar: "Grupo 1",
      //     Carreras: GruposConCarreras.GRUPO1,
      //   });
      // }
      // if (grup === "grupo2") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO2",
      //     NomMostrar: "Grupo 2",
      //     Carreras: GruposConCarreras.GRUPO2,
      //   });
      // }
      // if (grup === "grupo3") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO3",
      //     NomMostrar: "Grupo 3",
      //     Carreras: GruposConCarreras.GRUPO3,
      //   });
      // }
      // if (grup === "grupo4") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO4",
      //     NomMostrar: "Grupo 4",
      //     Carreras: GruposConCarreras.GRUPO4,
      //   });
      // }
      // if (grup === "grupo5") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO5",
      //     NomMostrar: "Grupo 5",
      //     Carreras: GruposConCarreras.GRUPO5,
      //   });
      // }
      // if (grup === "grupo6") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO6",
      //     NomMostrar: "Grupo 6",
      //     Carreras: GruposConCarreras.GRUPO6,
      //   });
      // }
      // if (grup === "grupo7") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO7",
      //     NomMostrar: "Grupo 7",
      //     Carreras: GruposConCarreras.GRUPO7,
      //   });
      // }
      // if (grup === "grupo8") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO8",
      //     NomMostrar: "Grupo 8",
      //     Carreras: GruposConCarreras.GRUPO8,
      //   });
      // }
      // if (grup === "grupo9") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO9",
      //     NomMostrar: "Grupo 9",
      //     Carreras: GruposConCarreras.GRUPO9,
      //   });
      // }
      // if (grup === "grupo10") {
      //   GruposTestAptitudes.push({
      //     NumGrupo: "GRUPO10",
      //     NomMostrar: "Grupo 10",
      //     Carreras: GruposConCarreras.GRUPO10,
      //   });
      // }
    // });
  }

  function _ChageSelectGrupos(event) {
    setValueSelecCarrera('')
    console.log('change select grupo')
    if (event.target.value != "Seleccione Un Grupo") {
      let grupoSeleccionado = JSON.parse(event.target.value);
      setValueSelecGrup(event.target.value);
      // console.log(grupoSeleccionado)
      setGropoSeleccionado(grupoSeleccionado);
    } else {
      setGropoSeleccionado({ Carreras: [] });
    }
    AtuzalirUseefec()
  }
  function _ChageSelectCarrera(event) {
    let Carrera = event.target.value;
    if (Carrera != "Seleccione una Carrera") {
      // console.log(Carrera)
      setValueSelecCarrera(Carrera);
    } else {
      setValueSelecCarrera("");
    }
  }
  function _validarCarrera(newCarre) {
    let valido = true;
    lstCarrerasSeleccionadas.forEach((item) => {
      const { carrera = "" } = item;
      console.log(carrera, " new ", newCarre, " val ", carrera == newCarre);
      if (carrera == newCarre) {
        valido = false;
      }
    });
    return valido;
  }
  async function _lstAddCarrera() {
    // console.log(_validarCarrera(ValueSelecCarrera))
    // console.log(ValueSelecCarrera)
    if (
      ValueSelecCarrera != "Seleccione Una Carrera" &&
      _validarCarrera(ValueSelecCarrera)
    ) {
      await setCarrerasSeleccionadas([
        ...lstCarrerasSeleccionadas,
        { carrera: ValueSelecCarrera, prioridad: Prioridad },
      ]);
      await setlstCarrerasSeleccionadas([
        ...lstCarrerasSeleccionadas,
        { carrera: ValueSelecCarrera, prioridad: Prioridad },
      ]);
      let temp = [...lstCarrerasSeleccionadas,
      { carrera: ValueSelecCarrera, prioridad: Prioridad }]
      _RevisarTest(temp)
    }
    setPrioridad(1)
    setValueSelecCarrera('')
    AtuzalirUseefec()
  }
  function _ChangePrioridad(priori) {
    setPrioridad(priori);
  }
  async function _QuitarCarreraDeLista(i){
    const tempLst = await lstCarrerasSeleccionadas.filter((carrera,index)=>{
      if( index != i){
        return carrera
      }
    })
    await setCarrerasSeleccionadas(tempLst)
    await setlstCarrerasSeleccionadas(tempLst)
    _RevisarTest(tempLst)
  }

  const _RevisarTest = (array) => {
    var usuarios = db.collection("usuarios").doc(`${Id}`);
    return usuarios
      .update({
        resultados_carreras : array
      })
      .then(function () {
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };

  return (
    <Fragment>
      <strong style={{textTransform: 'uppercase'}}>Test 3 Aptitudes</strong>
      {/* {grupos_todo.map((grupo,index)=>{
        return (
          // <div key={index} className="row pl-5">
          //   <p className="text-muted">{grupo.texto} :</p>
          //   <p className="text-muted">&nbsp; {grupo.valor}</p>
          // </div>
          <ContenedorAptitudes pregunta={`${grupo.texto}`} respuesta={`${grupo.valor}`}/>
        )
      })} */}

      {
        list_grupos_total_test3.map((grupo,index)=>{
          return(
            <div key={index} className='container-fluid m-0 p-0'>
              <div className='row border border-black mx-3 justify-content-center align-items-center'
                style={{
                  backgroundColor: grupo.selectPorUser?ColorVerde:grupo.selectPorConsultor?ColorAmarillo:'',
                }}
              >
                <div className='col-9'>
                  <input type="number" min="1" max="5" value={grupo.valor}
                    style={{textAlign:'center',marginRight:10}}
                  />
                  <strong>{grupo.texto_grupo}</strong>
                </div>
                <div className='col-3'>
                  <input 
                    type='checkbox' 
                    checked = {grupo.selectPorUser || grupo.selectPorConsultor}
                    disabled={grupo.selectPorUser? true: false}
                    style={{textAlign:'center',marginRight:10}}
                    onClick={()=>{_ChangeCheckboxGrupos(grupo.num_grupo)}}
                  />
                </div>
              </div>
            </div>
          )
        })
      }

      {/* Grupo1 */}


      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo1.selectPorUser?ColorVerde:grupo1.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo1.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 1 - APTITUDES MANUALES O MECÁNICAS'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo1.selectPorUser || grupo1.selectPorConsultor}
              disabled={grupo1.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(1)}}
            />
          </div>
        </div>
      </div> */}

      
      {/* Grupo2 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo2.selectPorUser?ColorVerde:grupo2.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo2.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 2 - APTITUDES PARA EL ATLETISMO Y ACTIVIDADES AL AIRE LIBRE'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo2.selectPorUser || grupo2.selectPorConsultor}
              disabled={grupo2.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(2)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo3 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo3.selectPorUser?ColorVerde:grupo3.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo3.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 3 - HABILIDADES PARA ACABAR LAS COSAS Y SER DETALLISTAS'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo3.selectPorUser || grupo3.selectPorConsultor}
              disabled={grupo3.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(3)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo4 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo4.selectPorUser?ColorVerde:grupo4.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo4.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 4 - HABILIDADES PARA EL MANEJO DE CIFRAS, NÚMEROS Y CONTROL DEL GASTO'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo4.selectPorUser || grupo4.selectPorConsultor}
              disabled={grupo4.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(4)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo5 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo5.selectPorUser?ColorVerde:grupo5.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo5.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 5 - HABILIDADES PARA INFLUIR, PERSUADIR, ATENDER'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo5.selectPorUser || grupo5.selectPorConsultor}
              disabled={grupo5.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(5)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo6 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo6.selectPorUser?ColorVerde:grupo6.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo6.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 6 - APTITUDES ARTÍSTICAS, MANIPULATIVAS O DE MANEJO DE LAS COSAS'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo6.selectPorUser || grupo6.selectPorConsultor}
              disabled={grupo6.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(6)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo7 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo7.selectPorUser?ColorVerde:grupo7.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo7.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 7 - APTITUDES LINGUÍSTICA, DE LECTURA Y ESCRITURA'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo7.selectPorUser || grupo7.selectPorConsultor}
              disabled={grupo7.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(7)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo8 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo8.selectPorUser?ColorVerde:grupo8.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo8.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 8 - APTITUDES PARA PLANIFICAR, ORGANIZAR, DIRIGIR'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo8.selectPorUser || grupo8.selectPorConsultor}
              disabled={grupo8.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(8)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo9 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo9.selectPorUser?ColorVerde:grupo9.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo9.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 9 - APTITUDES PARA ENSEÑAR, EDUCAR, AYUDAR'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo9.selectPorUser || grupo9.selectPorConsultor}
              disabled={grupo9.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(9)}}
            />
          </div>
        </div>
      </div> */}

      {/* Grupo10 */}
      {/* <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3 justify-content-center align-items-center'
          style={{
            backgroundColor: grupo10.selectPorUser?ColorVerde:grupo10.selectPorConsultor?ColorAmarillo:'',
          }}
        >
          <div className='col-9'>
            <input type="number" min="1" max="5" value={grupo10.valor}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{'GRUPO 10 - APTITUDES PARA EL ARTE, LA CREATIVIDAD Y LA INNOVACIÓN'}</strong>
          </div>
          <div className='col-3'>
            <input 
              type='checkbox' 
              checked = {grupo10.selectPorUser || grupo10.selectPorConsultor}
              disabled={grupo10.selectPorUser? true: false}
              style={{textAlign:'center',marginRight:10}}
              onClick={()=>{_ChangeCheckboxGrupos(10)}}
            />
          </div>
        </div>
      </div> */}

      

      <p className="text-muted">Grupos Seleccionados :</p>
{/* 
      {grupos.map((grupo) => {
        let StringGrupo = Object.keys(grupo)[0];
        let ValGrupo = Object.values(grupo)[0];
        // _AddGruposCarreras(StringGrupo)
        let Grupo = StringGrupo.split('grupo')
        return (
          <div key={Object.keys(grupo)[0]} className="row pl-5">
            <p className="text-muted">{ `Grupo ${Grupo[1]} `} :</p>
            <p className="text-muted">&nbsp; {ValGrupo}</p>
          </div>
        );
      })} */}

      {/* GruposSelecionado1 */}
      {
        grupo1.selectPorUser || grupo1.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 1'}</strong>
                  <strong style={{height:'100%'}}>: {grupo1.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo1.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(1)}}
              />
            </div>
          </div>
        </div>
        :null
      }

      {/* GruposSelecionado2 */}
      {
        grupo2.selectPorUser || grupo2.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 2'}</strong>
                  <strong style={{height:'100%'}}>: {grupo2.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo2.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(2)}}
              />
            </div>
          </div>
        </div>
        :null
      }

      
      {/* GruposSelecionado3 */}
      {
        grupo3.selectPorUser || grupo3.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 3'}</strong>
                  <strong style={{height:'100%'}}>: {grupo3.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo3.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(3)}}
              />
            </div>
          </div>
        </div>
        :null
      }
      
      {/* GruposSelecionado4 */}
      {
        grupo4.selectPorUser || grupo4.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 4'}</strong>
                  <strong style={{height:'100%'}}>: {grupo4.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo4.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(4)}}
              />
            </div>
          </div>
        </div>
        :null
      }

       {/* GruposSelecionado5 */}
       {
        grupo5.selectPorUser || grupo5.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 5'}</strong>
                  <strong style={{height:'100%'}}>: {grupo5.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo5.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(5)}}
              />
            </div>
          </div>
        </div>
        :null
      }
      
      {/* GruposSelecionado6 */}
      {
        grupo6.selectPorUser || grupo6.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 6'}</strong>
                  <strong style={{height:'100%'}}>: {grupo6.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo6.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(6)}}
              />
            </div>
          </div>
        </div>
        :null
      }
      
       {/* GruposSelecionado7 */}
       {
        grupo7.selectPorUser || grupo7.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 7'}</strong>
                  <strong style={{height:'100%'}}>: {grupo7.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo7.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(7)}}
              />
            </div>
          </div>
        </div>
        :null
      }

       {/* GruposSelecionado8 */}
       {
        grupo8.selectPorUser || grupo8.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 8'}</strong>
                  <strong style={{height:'100%'}}>: {grupo8.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo8.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(8)}}
              />
            </div>
          </div>
        </div>
        :null
      }

       {/* GruposSelecionado9 */}
       {
        grupo9.selectPorUser || grupo9.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 9'}</strong>
                  <strong style={{height:'100%'}}>: {grupo9.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo9.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(9)}}
              />
            </div>
          </div>
        </div>
        :null
      }

      {/* GruposSelecionado10 */}
      {
        grupo10.selectPorUser || grupo10.selectPorConsultor?
        <div className='container-fluid m-0 p-0'>
          <div className='row border border-black mx-3 justify-content-center align-items-center'
          
          >
            <div className='col-9'>
                <div style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}> 
                  <strong style={{height:'100%'}}>{'Grupo 10'}</strong>
                  <strong style={{height:'100%'}}>: {grupo10.valor}</strong>
                </div>
            </div>
            <div className='col-3 justify-content-center'>
              <input 
                type='checkbox' 
                checked = {grupo10.validadoPorConsultor}
                style={{textAlign:'center',marginRight:10}}
                onClick={()=>{_ChangeCheckboxValidado(10)}}
              />
            </div>
          </div>
        </div>
        :null
      }
      





      <br/>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <select
          style={{ width: "44%",fontWeight:'bold' }}
          className="custom-select"
          onChange={(event) => {
            _ChageSelectGrupos(event);
          }}
          value={ValueSelecGrup}
        >
          <option style={{fontWeight:'bold'}} value={"Seleccione Un Grupo"}>Seleccione un Grupo</option>

          {GruposSelect.map((grupo,index) => {
            return (
              <option key={index} style={{fontWeight:'bold'}} value={JSON.stringify(grupo)}>
                {grupo.NomMostrar}
              </option>
            );
          })}
        </select>
        {/* <select
          style={{ width: "44%" , fontWeight:'bold' }}
          className="custom-select"
          onChange={_ChageSelectCarrera}
          value={ValueSelecCarrera}
        >
          <option style={{fontWeight:'bold'}} value={"Seleccione Una Carrera"}>
            Seleccione una Carrera
          </option>

          {GropoSeleccionado.Carreras.map((Carrera,index) => {
            return (
              <option key={index} style={{fontWeight:'bold'}}  value={Carrera}>
                {Carrera}
              </option>
            );
          })}
        </select> */}
         <input list="carre" onChange={_ChageSelectCarrera} value={ValueSelecCarrera} className=' form-control' name="carreras" id="carreras" placeholder='Seleccione Una Carrera' style={{fontWeight:'bold'}}/>
          <datalist id='carre'>
            {GropoSeleccionado.Carreras.map((Carrera,index) => {
              return (
                <option key={index} style={{fontWeight:'bold'}}  value={Carrera}>
                  {Carrera}
                </option>
              );
            })}
          </datalist>
        <div>
            <input
            name="input1"
            type="number"
            placeholder="Prioridad"
            value={Prioridad}
            className="form-control input-sm"
            onChange={(e) => _ChangePrioridad(`${e.target.value}`)}
            />
        </div>
        

        <FontAwesomeIcon
          style={{ width: "10%" }}
          icon={faPlusCircle}
          onClick={() => {
            _lstAddCarrera();
          }}
          className="IconosToggleModal"
        />
      </div>
      <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Carrera</th>
              <th scope="col">Prioridad</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {lstCarrerasSeleccionadas.map((objCarre,index) => {
                // console.log(objCarre.carrera)
                return(
                    <tr key={index}>
                        <td>{objCarre.carrera}</td>
                        <td>{objCarre.prioridad}</td>
                        <td><button onClick={()=> {_QuitarCarreraDeLista(index)}} type="button" className="btn btn-danger">Quitar</button></td>
                    </tr>
                )
                
            })}
          </tbody>
        </table>;
      
    </Fragment>
  );
};


const mapStateToProps = (state) => {
  return {
    Sesion: state.SesionReducer.Sesion,
    Firebase: state.FirebaseReducer.Firebase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TestAptitudes);



const ContenedorAptitudes = (props) => {
  const {childen,pregunta='' , respuesta=''} = props
  return (
    <div className='container-fluid m-0 p-0'>
        <div className='row border border-black mx-3'>
          <div className='col-12'>
            <input 
              type="number" 
              min="1" 
              max="5" 
              // value={preguntas[1].respuesta1} disabled
              value={respuesta}
              style={{textAlign:'center',marginRight:10}}
            />
            <strong>{pregunta}</strong>
            {/* <p>{_ConverNumberARespuesta(preguntas[1].respuesta1)}</p> */}
          </div>
          {/* <div className='col-9'>
            <strong>{pregunta}</strong>
          </div> */}
        </div>
      </div>
  )
}
