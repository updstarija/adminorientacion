/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faThumbsUp,
  faWindowClose,
  faBook,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import ButtonAprobarTest from "./ModalAprobarComponents/ButtonAprobarTest";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useReactToPrint } from "react-to-print";

const ModalAprobarRevision = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const contad = 0;
  const { icon = "manito", buttonLabel, className, test = {} } = props;
  let {
    Id = "1",
    nombres = "Sin Nombre",
    apellidos = "",
    colegio = "Sin Colegio",
    celular = "Sin Celular",
    correo = "Sin Correo",
    curso = "sin Curso",
    revisadoPor = "",
    resumen = {},
    resultados_carreras = [],
  } = test;
  const { test3 = {} } = resumen;
  const { grupos_todo = [], grupos = [], grupos_total_test3 = {} } = test3;
  // console.log(test)
  // console.log(grupos)
  const lestKeysGrupos = grupos.map((grupo) => {
    return Object.keys(grupo)[0];
  });

  useEffect(() => {
    _OrdenarResultados_Carreras();
  }, []);

  function _OrdenarResultados_Carreras() {
    let temp = resultados_carreras.sort(function (a, b) {
      if (a.prioridad > b.prioridad) {
        return 1;
      }
      if (a.prioridad < b.prioridad) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    resultados_carreras = temp;
  }

  const UpdsCarrerasOfertadas = [
    "Derecho",
    "Ingeniería Comercial",
    "Administración de Empresas",
    "Contaduría Pública",
    "Psicología",
    "C. Comunicación Social",
    "Ingeniería de Sistemas",
    "Ingeniería Civil",
    "Ingeniería Industrial",
    "Ingeniería en Gestión Petrolera",
    "Ingeniería en Gestión Ambiental",
    "Ingeniería en Redes y Telecomunicaciones",
  ];

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  return (
    <div className="animate__animated animate__swing">
      {icon == "manito" ? (
        <FontAwesomeIcon
          icon={faThumbsUp}
          onClick={toggle}
          className="IconosToggleModal"
        />
      ) : (
        <FontAwesomeIcon
          style={{ backgroundColor: "rgba(180,180,250,1)" }}
          icon={faBook}
          onClick={toggle}
          className="IconosToggleModal"
        />
      )}
      <Modal
        size="xl"
        isOpen={modal}
        toggle={toggle}
        className={className}
        className="animate__animated animate__swing"
        id="divToPrint"
      >
        <ModalHeader toggle={toggle} className="w-100 ">
          <div className="">
            <p>Aprobar Revision</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="col-12 m-0 p-0">
            <p>
              Este test fue revisado por el Consultor {`${revisadoPor}`}, desea
              aprobarlo?{" "}
            </p>
          </div>
          <div className="col-12 " ref={componentRef}>
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <img
                      src={require("../../Asets/logoupdstodo.png")}
                      style={{ width: "7%" }}
                    />
                    <img
                      src={require("../../Asets/burgos.png")}
                      style={{ width: "15%", marginLeft: 20 }}
                    />
                  </div>
                </div>
                <div className="text-center col-md-12">
                  <h6 className="mt-3">
                    PROGRAMA DE ORIENTACIÓN ACADÉMICO PROFESIONAL(POAP)
                  </h6>
                </div>
                <div className="text-center  col-md-12">
                  <h6>
                    <h3>TEST DE ORIENTACIÓN VOCACIONAL</h3>
                  </h6>
                </div>

                <div className="row mt-3">
                  <div className="row col-12">
                    <div className="col-6">
                      <p className="text-left">
                        <b>ESTUDIANTE: </b>
                        {`${nombres.toUpperCase()} ${apellidos.toUpperCase()}`}
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-left">
                        <b> UNIDAD EDUCATIVA: </b>
                        {`${colegio.toUpperCase()}`}
                      </p>
                    </div>

                    <p
                      className="text-justify"
                      style={{ marginBottom: 2, marginLeft: 10 }}
                    >
                      Te presentamos tus Resultados de Orientación Vocacional.
                      En esta primera sección encontrarás una descripción de tus
                      principales aptitudes y las áreas de estudio a las que se
                      vinculan.
                    </p>
                    <p className="text-justify" style={{ marginLeft: 10 }}>
                      Una aptitud es la capacidad y destreza para realizar algo,
                      que se obtiene en forma innata, o se adquiere o
                      perfecciona, en virtud del aprendizaje y la práctica. Las
                      personas tienen una o más habilidades y es muy poco
                      probable que alguien posea grandes habilidades en todos
                      los campos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {grupos_total_test3.grupo1.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES MANUALES O MECÁNICAS
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      TECNOLÓGICO: Profesiones que a través del dominio de la
                      Tecnología hacen posible cualquier tipo de producto,
                      aparato, maquinaria, instalación o construcción:
                      Ingeniería en general. Implican habilidad manual y
                      mecánica para diseñar, arreglar, construir objetos o
                      realizar algo, como facilidad para manipular instrumentos
                      o herramientas de cualquier tipo. Usan el conocimiento
                      científico, matemático, técnica, arte, ciencia,
                      imaginación y conocimiento de las ciencias naturales para
                      solucionar problemas de la vida cotidiana.
                    </p>
                  </li>
                  {/* <li><p>ACTIVIDAD FÍSICA: Profesiones vinculadas a las Ciencias de la Actividad Física y el Deporte, que contemplan un conjunto de disciplinas del conocimiento, que se orientan a la realización, estudio y comprensión del deporte y la actividad física.</p></li> */}
                  <li>
                    <p>
                      ARTES PLÁSTICAS: Profesiones donde se requiere creatividad
                      y la expresión de ideas a través del manejo de formas,
                      colores, materiales y diseños en general.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas relacionadas a las actividades manuales
                      que se realizan en forma idéntica y rutinaria, haciendo
                      una comparación con el trabajo que efectúa una máquina
                      creando productos y servicios.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo2.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  HABILIDADES PARA EL DEPORTE Y ACTIVIDADES AL AIRE LIBRE
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      AGROPECUARIO/ MEDIO AMBIENTE: Profesiones vinculadas al
                      manejo de recursos naturales, o que se desarrollan en
                      contacto con la naturaleza. Abarcan lo agropecuario como
                      la agricultura, ganadería y varias ingenierías.
                    </p>
                  </li>
                  <li>
                    <p>
                      ACTIVIDAD FÍSICA: Profesiones vinculadas a las Ciencias de
                      la Actividad Física y el Deporte, que contemplan un
                      conjunto de disciplinas del conocimiento, que se orientan
                      a la realización, estudio y comprensión del deporte y la
                      actividad física.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas relacionadas a la producción y
                      elaboración de alimentos, cuidado de animales, trabajo en
                      el campo, protección ambiental, actividades deportivas,
                      recreacionales y de preparación física, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo3.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  HABILIDADES PARA ACABAR LAS COSAS Y SER DETALLISTAS
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES/HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura. Las habilidades comunicativas, una actitud
                      crítica y prosocial del profesional contribuirán en el
                      desarrollo social.
                    </p>
                  </li>
                  <li>
                    <p>
                      ECONOMÍA: Profesiones que hacen referencia a la
                      administración en general, mundo empresarial y económico.
                      Analizan las relaciones productivas, comerciales, de
                      distribución y de consumo de bienes y servicios.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas de apoyo administrativo en tareas y/o
                      proyectos económicos o sociales. Pueden requerir
                      minuciosidad, rapidez, atención al detalle, registro,
                      control e interpretación de la información, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo4.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  HABILIDADES PARA EL MANEJO DE CIFRAS, NÚMEROS Y CONTROL DEL
                  GASTO
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENTÍFICO: Profesiones que a partir de la investigación
                      aportan a la teoría científica básica para el desarrollo
                      de nuevos materiales, técnicas y tecnología para la
                      solución de problemas.
                    </p>
                  </li>
                  <li>
                    <p>
                      ECONOMÍA: Profesiones vinculadas al ámbito de la Economía,
                      que hacen referencia a la administración en general, mundo
                      empresarial y económico. Analizan las relaciones
                      productivas, comerciales, de distribución y de consumo de
                      bienes y servicios.
                    </p>
                  </li>
                  <li>
                    <p>
                      TECNOLÓGICO: Profesiones que a través del dominio de la
                      tecnología hacen posible cualquier tipo de producto,
                      aparato, maquinaria, instalación o construcción:
                      Ingeniería en general. Implican habilidad manual y
                      mecánica para diseñar, arreglar, construir objetos o
                      realizar algo, como facilidad para manipular instrumentos
                      o herramientas de cualquier tipo. Usan el conocimiento
                      científico, matemático, técnica, arte, ciencia,
                      imaginación y conocimiento de las ciencias naturales para
                      solucionar problemas de la vida cotidiana.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas relacionadas a las ventas, manejo de
                      dinero, logística, manejo de aparatos y máquinas, trabajo
                      en laboratorios o fábricas, apoyo administrativo, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo5.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  HABILIDADES PARA INFLUIR, PERSUADIR, ATENDER
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES/HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura. El buen manejo del lenguaje, las habilidades
                      comunicativas y el pensamiento crítico del profesional
                      contribuirán al desarrollo social.
                    </p>
                  </li>
                  <li>
                    <p>
                      ÁREA DE LA SALUD: Profesiones que se ocupan del cuidado de
                      la salud de las personas previniendo o curando
                      enfermedades.
                    </p>
                  </li>
                  <li>
                    <p>
                      ARTES PLÁSTICAS: Profesiones relacionadas con la
                      creatividad plástica, literaria, que dominan la expresión
                      de ideas o emociones a través del manejo de formas,
                      colores, materiales y diseños en general.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas vinculadas a la formación, educación,
                      cuidado y asesoramiento a personas.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo6.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES ARTÍSTICAS, MANIPULATIVAS O DE MANEJO DE LAS COSAS
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      ARTES PLÁSTICAS: Profesiones relacionadas con la
                      creatividad plástica, literaria, que dominan la expresión
                      de ideas o emociones a través de formas, colores,
                      materiales y diseños en general.
                    </p>
                  </li>
                  <li>
                    <p>
                      MUSICAL: Profesiones que se ocupan de la creación,
                      interpretación, transmisión o valoración de la música.
                    </p>
                  </li>
                  <li>
                    <p>
                      CIENCIAS SOCIALES/HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas que implican transmisión de saberes,
                      tanto intelectuales, como artísticos, técnicos, etc. y que
                      demuestran habilidad manual y de manipulación de objetos,
                      sensibilidad, gusto estético, creatividad, capacidad de
                      diseño, composición, interpretación, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo7.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES LINGUÍSTICA, DE LECTURA Y ESCRITURA
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES, HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura. Los profesionales contribuyen al desarrollo a
                      través del buen manejo del lenguaje, las habilidades
                      comunicativas, actitud analítica-crítica, la
                      investigación, la docencia, etc.
                    </p>
                  </li>
                  <li>
                    <p>
                      ARTES PLÁSTICAS: Profesiones relacionadas con la
                      creatividad plástica, literaria, que dominan la expresión
                      de ideas o emociones a través de formas, colores,
                      materiales y diseños en general.
                    </p>
                  </li>
                  <li>
                    <p>
                      MUSICAL: Profesiones que se ocupan de la creación,
                      interpretación, transmisión o valoración de la música.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas vinculadas a las artes, escritura,
                      diseño, edición, medios de comunicación, generación y
                      difusión de contenidos, disciplinas musicales, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo8.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES PARA PLANIFICAR, ORGANIZAR, DIRIGIR
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES, HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura. El pensamiento estratégico, las habilidades
                      comunicativas, la lógica y razonamiento, la planificación
                      y capacidad de gestión contribuyen al desarrollo.
                    </p>
                  </li>
                  <li>
                    <p>
                      ECONOMÍA: Profesiones vinculadas al ámbito de la Economía,
                      que hace referencia a la administración en general, mundo
                      empresarial y económico. Analizan las relaciones
                      productivas, comerciales, de distribución y de consumo de
                      bienes y servicios. Los profesionales en este campo tienen
                      visión estratégica, liderazgo, facilidad para guiar,
                      coordinar equipos y tareas, tomar decisiones, capacidad de
                      emprender, abstracción, capacidad de persuasión.
                    </p>
                  </li>
                  <li>
                    <p>
                      SEGURIDAD: Profesiones vinculadas al orden y la seguridad
                      en la convivencia humana y ciudadana para garantizar el
                      ejercicio de derechos de las personas. Los profesionales
                      demuestran capacidad de liderazgo, empatía, inteligencia
                      social y crítica.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas que demanden facilidad para ordenar,
                      guiar y disponer un determinado emprendimiento económico o
                      social.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo9.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES PARA ENSEÑAR, EDUCAR, AYUDAR
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES/HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas o de su
                      estudio. Destacan en el profesional la capacidad para
                      comunicar o transmitir conocimientos especiales o
                      generales sobre un tema, actitud prosocial, conciencia
                      social, etc.
                    </p>
                  </li>
                  <li>
                    <p>
                      Profesiones vinculadas a la enseñanza, orientación y
                      entrenamiento de personas. Hace referencia a la
                      transmisión de saberes, tanto intelectuales, como
                      artísticos, técnicos, deportivos, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}
            {grupos_total_test3.grupo10.validadoPorConsultor ? (
              <div className="text-justify">
                <h5 className="bg-info py-2 text-light text-center">
                  APTITUDES PARA EL ARTE, LA CREATIVIDAD Y LA INNOVACIÓN
                </h5>
                <h6>
                  <strong>
                    OPCIONES DE ESTUDIO Y TRABAJO QUE CONTEMPLA TU PERFIL:
                  </strong>
                </h6>
                <ul>
                  <li>
                    <p>
                      CIENCIAS SOCIALES/HUMANIDADES: Profesiones que se
                      desarrollan a través de las relaciones humanas y estudian
                      al ser humano como ente social, dando gran énfasis a
                      aspectos como el comportamiento, interacciones humanas y
                      la cultura. La sensibilidad social, actitud prosocial,
                      empatía, inteligencia social y crítica contribuirán al
                      desarrollo.
                    </p>
                  </li>
                  <li>
                    <p>
                      ARTES PLÁSTICAS: Profesiones relacionadas con la
                      creatividad plástica, literaria, que dominan la expresión
                      de ideas o emociones a través de formas, colores,
                      materiales, y diseño en general.
                    </p>
                  </li>
                  <li>
                    <p>
                      MUSICAL: Profesiones que se ocupan de la creación,
                      interpretación, transmisión o valoración de la música.
                    </p>
                  </li>
                  <li>
                    <p>
                      Carreras técnicas relacionadas con el diseño,
                      diagramación, medios de comunicación, publicidad,
                      generación de contenidos multimedia, etc.
                    </p>
                  </li>
                </ul>
              </div>
            ) : null}

            {/* <h5 className="bg-success  py-2 text-light text-center">CARRERAS SUGERIDAS</h5>
            <p>
              y <b>te recomendamos</b> las siguientes opciones de estudio y trabajo, las carreras en azul, las ofrecemos en la UPDS, por lo tanto, accederás a la malla curricular para conecerlas
              mejor. El resto de carreras no las ofrecemos, por lo que deberás informarte en otros centros o universidades.
            </p> */}
            <div className="row">
              <div className="col-12">
                <h4 className="bg-info py-2 text-light text-center">
                  <b>CARRERAS SUGERIDAS</b>
                </h4>
                <p className="text-justify">
                  Estas son las principales carreras técnicas y universitarias
                  que responden a tu perfil personal. De ese grupo, sólo las
                  remarcadas en color se ofertan en la UPDS, por lo tanto, si te
                  interesan, cliquea sobre las mismas y conocerás las mallas
                  curriculares.
                </p>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <ul className="list-group" style={{ padding: 0 }}>
                    {resultados_carreras.slice(0, 6).map((carrera, index) => {
                      const ofertadaPorUpds = UpdsCarrerasOfertadas.includes(
                        carrera.carrera
                      );
                      let styleOfertada = {
                        backgroundColor: "rgba(255,255,255,1)",
                      };
                      if (ofertadaPorUpds) {
                        styleOfertada = {
                          backgroundColor: "rgba(180,180,255,1)",
                        };
                      }

                      return (
                        <li
                          key={index}
                          className="list-group-item"
                          style={{ ...styleOfertada, padding: 5 }}
                        >
                          {carrera?.carrera}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-group">
                    {resultados_carreras.slice(6, 12).map((carrera, index) => {
                      const ofertadaPorUpds = UpdsCarrerasOfertadas.includes(
                        carrera.carrera
                      );
                      let styleOfertada = {
                        backgroundColor: "rgba(255,255,255,1)",
                      };
                      if (ofertadaPorUpds) {
                        styleOfertada = {
                          backgroundColor: "rgba(180,180,255,1)",
                        };
                      }

                      return (
                        <li
                          key={index}
                          className="list-group-item"
                          style={{ ...styleOfertada, padding: 5 }}
                        >
                          {carrera?.carrera}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-4">
                  <ul className="list-group">
                    {resultados_carreras.slice(12, 19).map((carrera, index) => {
                      const ofertadaPorUpds = UpdsCarrerasOfertadas.includes(
                        carrera.carrera
                      );
                      let styleOfertada = {
                        backgroundColor: "rgba(255,255,255,1)",
                      };
                      if (ofertadaPorUpds) {
                        styleOfertada = {
                          backgroundColor: "rgba(180,180,255,1)",
                        };
                      }

                      return (
                        <li
                          key={index}
                          className="list-group-item"
                          style={{ ...styleOfertada, padding: 5 }}
                        >
                          {carrera?.carrera}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="row justify-content-around">
          <ButtonAprobarTest test={{ ...test }} toggle={toggle} />
          {/* <Button color="secondary" onClick={toggle}>
            <FontAwesomeIcon className='mr-1' icon={faThumbsUp} onClick={toggle}/>
            Aprobar
          </Button> */}
          <Button color="secondary" onClick={toggle}>
            <FontAwesomeIcon
              className="mr-1"
              icon={faWindowClose}
              onClick={toggle}
            />
            Cancel
          </Button>
          <Button color="secondary" onClick={handlePrint}>
            <FontAwesomeIcon className="mr-1" icon={faPrint} />
            Imprimir
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalAprobarRevision;
