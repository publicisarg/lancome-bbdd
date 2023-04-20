import React from 'react'
import { Botona } from '../../common/Formulario/contenido-form'

export const Gracias = () => {
    return (
        <div>
            <div className='flex flex-col justify-center '>
                <p className='font-montserrat font-light text-[28px] pt-[40px] pb-8 '>¡TUS DATOS HAN SIDO <br/>
                INGRESADOS CON ÉXITO.</p>
                <p className='font-bold text-[28px] pb-[40px]'>STAY TUNED! </p>
            </div>
            

            <div className='flex justify-center'>
            <Botona href="https://www.lancome.com.ar" name="IR A lancome.com.ar" />
            </div>
        </div>
        

    )
}
