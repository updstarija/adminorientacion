// import React, { useEffect } from "react";
// import { connect, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import FilaTable from './FilaTable'
// import '../../StyGeneral/StyGeneral.css'
// import { cargarLstTest } from "../../redux/actions/Tests.Action";

// import SwalMensaje from '../../Components/SwalMensaje'
// import firebase from "../../Firebase/Firebase";

// const $ = require('jquery')
// $.DataTable = require('datatables.net')

// const LenguajeDataTable ={
//   language: {
//       "decimal": "",
//       "emptyTable": "No hay información",
//       "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
//       "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
//       "infoFiltered": "(Filtrado de _MAX_ total entradas)",
//       "infoPostFix": "",
//       "thousands": ",",
//       "lengthMenu": "Mostrar _MENU_ Entradas",
//       "loadingRecords": "Cargando...",
//       "processing": "Procesando...",
//       "search": "Buscar:",
//       "zeroRecords": "Sin resultados encontrados",
//       "paginate": {
//           "first": "Primero",
//           "last": "Ultimo",
//           "next": "Siguiente",
//           "previous": "Anterior"
//       }
//   },
// }

// // var $  = require( 'jquery' );
// // var dt = require( 'datatables.net' )();

// const Test = (props) => {
//   const {lstTest, Firebase,cargarLstTest} = props
//   const { db ,} = Firebase;
//   const dispatch = useDispatch()

//   useEffect(() => {

//       // $('#myTable').DataTable();

//       // console.log(lstTest)
//   }, []);
//   useEffect(() => {
//     console.log('pedire lst')
//     // $('#myTable').DataTable(LenguajeDataTable)

//       // const obtenerTests =  db.collection("usuarios").where('apellidos', '==', 'Velasquez Solano').onSnapshot((snapshot)=>{
//       const obtenerTests =  db.collection("usuarios").onSnapshot((snapshot)=>{

//       const lst_test = []

//       if ( $.fn.dataTable.isDataTable('#myTable') ) {
//           $('#myTable').DataTable().destroy();
//       }

//       snapshot.forEach( (doc)=>{
//         console.log(doc.data())
//         const test ={
//           ...doc.data(),
//           Id: doc.id,
//         };
//         lst_test.push(test)
//       })
//       console.log(lst_test)
//       cargarLstTest(lst_test);
//       setTimeout(() => {
//         $('#myTable').DataTable(LenguajeDataTable);
//       }, 3222);

//     })
//     return () => {
//       // obtenerTests();
//     }
//   }, []);

//   return (
//     <div className="container-fluid row p-0 justify-content-center m-0 animate__animated animate__wobble">
//       <div
//         className="row w-75  shadow-lg justify-content-center align-items-start mt-5"
//       >

//         {/* <SwalMensaje/> */}

//         <table className="table " id='myTable' >
//           <thead className="GeneCabezeraTable">
//             <tr>
//               {/* <th className='text-light' scope="col">ID</th> */}
//               <th className='text-light' scope="col">Estudiante</th>
//               <th className='text-light' scope="col">Fecha</th>
//               <th className='text-light' scope="col">Celular</th>
//               <th className='text-light' scope="col">Estado Test</th>
//               <th className='text-light' scope="col">Revisado por:</th>
//               <th className='text-light' scope="col">Fecha Aprobado:</th>
//               <th className='text-light' scope="col">Aprobado:</th>
//               <th className='text-light' scope="col">Acciones:</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//                 lstTest.map((test)=>{
//                     return (
//                         <FilaTable test = {{...test}} key={test.Id}/>
//                     )
//                 })
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     Firebase: state.FirebaseReducer.Firebase,
//     Sesion: state.SesionReducer.Sesion,
//     lstTest: state.TestsReducer.lstTest,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // add: (food) => dispatch(addFood(food)),
//     cargarLstTest: (lst) => dispatch(cargarLstTest(lst)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Test);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FilaTable from "./FilaTable";
import "../../StyGeneral/StyGeneral.css";

import SwalMensaje from "../../Components/SwalMensaje";

const $ = require("jquery");
$.DataTable = require("datatables.net");

const LenguajeDataTable = {
  language: {
    decimal: "",
    emptyTable: "No hay información",
    info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
    infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
    infoFiltered: "(Filtrado de _MAX_ total entradas)",
    infoPostFix: "",
    thousands: ",",
    lengthMenu: "Mostrar _MENU_ Entradas",
    loadingRecords: "Cargando...",
    processing: "Procesando...",
    search: "Buscar:",
    zeroRecords: "Sin resultados encontrados",
    paginate: {
      first: "Primero",
      last: "Ultimo",
      next: "Siguiente",
      previous: "Anterior",
    },
  },
};

// var $  = require( 'jquery' );
// var dt = require( 'datatables.net' )();

const Test = (props) => {
  const { lstTest } = props;
  //const tabla = $("#myTable").DataTable(LenguajeDataTable);
  useEffect(() => {
    setTimeout(() => {
      //tabla.destroy();
      $("#myTable").DataTable(LenguajeDataTable);
    }, 3222);

    // $('#myTable').DataTable();

    // console.log(lstTest)
  }, []);

  return (
    <div className="container-fluid row p-0 justify-content-center m-0 animate__animated animate__wobble">
      <div className="row w-75  shadow-lg justify-content-center align-items-start mt-5">
        {/* <SwalMensaje/> */}

        <table className="table " id="myTable">
          <thead className="GeneCabezeraTable">
            <tr>
              {/* <th className='text-light' scope="col">ID</th> */}
              <th className="text-light" scope="col">
                Estudiante
              </th>
              <th className="text-light" scope="col">
                Fecha
              </th>
              <th className="text-light" scope="col">
                Celular
              </th>
              <th className="text-light" scope="col">
                Estado Test
              </th>
              <th className="text-light" scope="col">
                Revisado por:
              </th>
              <th className="text-light" scope="col">
                Fecha Aprobado:
              </th>
              <th className="text-light" scope="col">
                Aprobado:
              </th>
              <th className="text-light" scope="col">
                Acciones:
              </th>
            </tr>
          </thead>
          <tbody>
            {lstTest.map((test) => {
              return <FilaTable test={{ ...test }} key={test.Id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Firebase: state.FirebaseReducer.Firebase,
    Sesion: state.SesionReducer.Sesion,
    lstTest: state.TestsReducer.lstTest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // add: (food) => dispatch(addFood(food)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
