import React, { Fragment } from "react";

const TestHabilidades = (props) => {
  let { test2 = {}, test2KeyAndValue = [] } = props;

  for (const key in test2) {
    test2KeyAndValue = [...test2KeyAndValue, { Key: key, ...test2[key] }];
    // console.log(`${key}`,test2[key]);
  }

  function _FormaterTest(val){
      if(val =='testGH'){
        return 'GH'
      }
      if(val =='testAB'){
        return 'AB'
      }
      if(val =='testEF'){
        return 'EF'
      }
      if(val =='testCD'){
        return 'CD'
      }    
  }
  return (
    <Fragment>
      <strong style={{textTransform: 'uppercase'}}>Test 2 Intereses</strong>
      {/* <p className="text-muted">puntaje obtenido</p> */}
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th className='text-uppercase' scope="col">test</th>
            <th className='text-uppercase' scope="col">nombre de área</th>
            <th className='text-uppercase' scope="col">puntaje obtenido</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            
            Object.values(test2KeyAndValue).map((t) => {
              const { Key = "", valor = "" } = t;
              return (
                <tr key={Key} >
                  <td>{_FormaterTest(Key)}</td>
                  <td>{`${valor}`}</td>
                </tr>
              );
            })
          } */}
          <tr >
            <td style={styles.TextoAptitudes}>{'AB'}</td>
            <td style={styles.TextoAptitudes}>MODALIDAD DE TECNOLOGÍA</td>
            <td style={styles.TextoAptitudes}>{`${test2.testAB.valor}`}</td>
          </tr>
          <tr >
            <td style={styles.TextoAptitudes}>{'CD'}</td>
            <td style={styles.TextoAptitudes}>MODALIDAD DE HUMANIDADES/CIENCIAS SOCIALES y CS. ECONÓMICAS</td>
            <td style={styles.TextoAptitudes}>{`${test2.testCD.valor}`}</td>
          </tr>
          <tr >
            <td style={styles.TextoAptitudes}>{'EF'}</td>
            <td style={styles.TextoAptitudes}>MODALIDAD ARTÍSTICA-CREATIVA</td>
            <td style={styles.TextoAptitudes}>{`${test2.testEF.valor}`}</td>
          </tr>
          <tr >
            <td style={styles.TextoAptitudes}>{'GH'}</td>
            <td style={styles.TextoAptitudes}>MODALIDAD DE CIENCIAS DE LA NATURALEZA Y LA SALUD</td>
            <td style={styles.TextoAptitudes}>{`${test2.testGH.valor}`}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default TestHabilidades;

const styles={
  TextoAptitudes:{
    fontSize:20
  }
}
