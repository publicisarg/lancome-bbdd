import React from 'react'
import { Input, Checkbox } from '../input'

export const DatosPersonales = () => {
    return (
        <>
        <div className='md:flex'>
            <div className='flex flex-col w-1/2 my-4 mr-4'>
                <Input name="nombre" placeholder="Nombre*" type="text" />
                <Input name="fechanac" placeholder="FECHA DE NAC.: dd/mm/aaaa*" type="text" />
                <Input name="email" placeholder="EMAIL*" type="text" />
            </div>
            <div className='flex flex-col  w-1/2 md:my-4 md:ml-4'>
                <Input name="apellido" placeholder="Apellido*" type="text" />
                <Input name="email" placeholder="EMAIL*" type="text" />
                <Input name="localidad" placeholder="LOCALIDAD" type="text" />
            </div> 
            </div>
            </>

    )
}

export const MeInteresaria = () => {
    return (
        <>
            <div className='flex flex-col w-full my-4'>
            <Checkbox name="Tratamiento" label="Tratamiento"  />
            <Checkbox name="Maquillajes" label="Maquillajes"  />
            <Checkbox name="Fragancias" label="Fragancias"  />
            </div>
        </>

    )
}

export const QuisieraSaber = () => {
    return (
        <>
            <div className='flex flex-col w-full my-4'>
            <Checkbox name="Rostro" label="Rostro"  />
            <Checkbox name="Labios" label="labios"  />
            <Checkbox name="Ojos" label="Ojos"  />
            <Checkbox name="Cuerpo" label="Cuerpo"  />

            </div>
        </>

    )
}

export const Preocupacion = () => {
    return (
        <>
        <div className='md:flex'>
            <div className='flex flex-col w-full md:my-4 mt-4'>
                <Checkbox name="Deshidratacion" label="Deshidratacion"  />
                <Checkbox name="Uniformidad del tono" label="Uniformidad del tono"  />
                <Checkbox name="Líneas finas Arrugas profundas" label="Líneas finas / Arrugas profundas" />
                <Checkbox name="Textura" label="Textura" />
            </div>
            <div className='flex flex-col w-full md:my-4 mb-4'>
                <Checkbox name="Acné" label="Acné"  />
                <Checkbox name="Falta de luminosidad" label="Falta de luminosidad"  />
                <Checkbox name="Pérdida de firmeza" label="Pérdida de firmeza" />
            </div>
            </div>
            </>
    )
}

export const Buscando = () => {
    return (
        <>
        <div className='md:flex'>
            <div className='flex flex-col w-full md:my-4 mt-4'>
            <Checkbox name="Descuentos y beneficios" label="Descuentos y beneficios"  />
            <Checkbox name="Aprender a usar los productos" label="Aprender a usar los productos"  />
            </div>
            <div className='flex flex-col w-full md:my-4'>
            <Checkbox name="Descubrir buenas reseñas" label="Descubrir buenas reseñas"  />
            <Checkbox name="AVolver a comprar" label="Volver a comprar"  />
            </div>
            </div>
        </>

    )
}

export function Boton (props: any) {
    return (
       <button className='md:py-2 py-2 md:px-9 px-16 md:text-base text-[22px] mb-14 bg-black hover:bg-[#FFAFBC] text-white font-bold'>{props.name}</button>
    )
  }