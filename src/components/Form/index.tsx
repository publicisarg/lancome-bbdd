import React from 'react'
import { DatosPersonales, MeInteresaria, QuisieraSaber, Preocupacion, Buscando } from '../../common/Formulario/contenido-form'
import {Subtitle} from '../../common/subtitle'
export const Form = () => {
  return (
    <div className='w-[827px] m-auto '>
      <DatosPersonales/>
      <Subtitle texto="Me interesaría recibir información de:*" />
      <MeInteresaria/>
      <Subtitle texto="Quisiera saber de productos para:" />

      <QuisieraSaber/>
      <Subtitle texto="Me interesaría recibir información de:*" />

      
      <Preocupacion/>
      <Subtitle texto="Me interesaría recibir información de:*" />

      <Buscando/>
    
    </div>
  )
}
