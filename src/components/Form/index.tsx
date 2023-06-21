import React from 'react'
import { DatosPersonales, MeInteresaria, QuisieraSaber, Preocupacion, Buscando } from '../../common/Formulario/contenido-form'
import { Subtitle } from '../../common/subtitle'
export const Form = (props: any) => {
  return (
    <div className='w-[827px] m-auto mt-8'>

      <DatosPersonales />
      <Subtitle texto="Me interesaría recibir información de:*" />
      <MeInteresaria handleTratamiento={props.handleTratamiento} handleMaquillaje={props.handleMaquillaje} />
      {(props.tratamiento || props.maquillaje) &&
        <>
          <Subtitle texto="Quisiera saber de productos para:" />
          <QuisieraSaber maquillaje={props.maquillaje} tratamiento={props.tratamiento} handleInterests={props.handleInterests} />
          <Subtitle texto="Selecciona tu principal preocupación:*" />
          <Preocupacion maquillaje={props.maquillaje} tratamiento={props.tratamiento} handleChecks={props.handleChecks} />
        </>
      }
      <Subtitle texto="Estoy buscando:*" />
      <Buscando />
    </div>
  )
}
