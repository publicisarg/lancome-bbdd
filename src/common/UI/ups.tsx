import React from 'react'
import { Boton } from '../../common/Formulario/contenido-form'



export const Ups = () => {
    return (
        <div className='text-center'>

            <div className='flex justify-center'>
                <p className='font-montserrat font-light text-[24px] pt-[50px] pb-[30px] uppercase'>Ingresá tus datos de nuevo<br/>
                    ya que no se cargaron<br/>
                    correctamente.</p>
            </div>
            <div className='flex justify-center'>
            <Boton name="VOLVER" />
            </div>
        </div>

    )
}
