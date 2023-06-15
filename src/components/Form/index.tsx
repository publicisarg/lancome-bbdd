import React from 'react'
import { DatosPersonales, MeInteresaria, QuisieraSaber, Preocupacion, Buscando } from '../../common/Formulario/contenido-form'
import { Subtitle } from '../../common/subtitle'
export const Form = () => {
  return (
    <div className='w-[827px] m-auto mt-8'>

      <DatosPersonales />
      <Subtitle texto="Me interesaría recibir información de:*" />
      <MeInteresaria />
      <Subtitle texto="Quisiera saber de productos para:" />

      <QuisieraSaber />
      <Subtitle texto="Selecciona tu principal preocupación:*" />


      <Preocupacion />
      <Subtitle texto="Estoy buscando:*" />

      <Buscando />

    </div>
  )
}
