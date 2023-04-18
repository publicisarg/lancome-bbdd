import React from 'react'
import { Input, Checkbox } from '../input'

export const DatosPersonales = () => {
    return (
        <>
        <div className='flex'>
            <div className='flex flex-col w-1/2 mx-4'>
                <Input name="nombre" placeholder="Nombre*" type="text" />
                <Input name="nombre" placeholder="FECHA DE NAC.: dd/mm/aaaa*" type="text" />
                <Input name="nombre" placeholder="EMAIL*" type="text" />
            </div>
            <div className='flex flex-col  w-1/2 mx-4 '>
                <Input name="nombre" placeholder="Apellido*" type="text" />
                <Input name="nombre" placeholder="EMAIL*" type="text" />
                <Input name="nombre" placeholder="LOCALIDAD" type="text" />
            </div>
            </div>
            </>

    )
}

export const MeInteresaria = () => {
    return (
        <>
            <div className='flex flex-col w-full m-4'>
            <Checkbox name="Tratamiento" label="Tratamiento"  />
            <Checkbox name="nombre" label="Maquillajes"  />
            <Checkbox name="nombre" label="Fragancias"  />
            </div>
        </>

    )
}

export const QuisieraSaber = () => {
    return (
        <>
            <div className='flex flex-col w-full m-4'>
            <Checkbox name="nombre" label="Rostro"  />
            <Checkbox name="nombre" label="labios"  />
            <Checkbox name="nombre" label="Ojos"  />
            <Checkbox name="nombre" label="Cuerpo"  />

            </div>
        </>

    )
}

export const Preocupacion = () => {
    return (
        <>
            <div className='flex flex-col w-full m-4'>
                <Checkbox name="nombre" label="Deshidratacion"  />
                <Checkbox name="nombre" label="Uniformidad del tono"  />
                <Checkbox name="nombre" label="Textura" />
            </div></>

    )
}

export const Buscando = () => {
    return (
        <>
            <div className='flex flex-col w-full mx-4'>
            <Checkbox name="nombre" label="Acné"  />
            <Checkbox name="nombre" label="Falta de lumimnosidad"  />
            <Checkbox name="nombre" label="Perdida de firmeza"  />

            </div>
        </>

    )
}
