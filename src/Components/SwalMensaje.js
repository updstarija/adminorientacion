




import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function _ShowSwall(){
    MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        onOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
      })
}

const SwalMensaje = () => {
    return (
        <div>
            <button onClick={()=>{_ShowSwall()}}>
                me lleva
            </button>
        </div>
    )
}

export default SwalMensaje;
