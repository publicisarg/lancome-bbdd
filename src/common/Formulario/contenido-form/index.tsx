import React, { useState } from 'react'
import { Input, Checkbox } from '../input'
import { SelectorLocalidades, SelectorProvincia } from '../../selectores';

export const DatosPersonales = () => {

    const [provincia, setProvincia] = useState("");

    return (
        <>
            <div className="grid md:grid-cols-2 grids-cols-1 md:gap-8 gap-0 mt-16">
                <div className="grid grid-cols-1">
                    <Input name="first-name" placeholder="Nombre*" type="text" />
                    <Input name="birthday" placeholder="Fecha de nacimiento*" type="datetime-local" />
                    {/*<Input name="provincia" placeholder="Provincia*" type="text"/>*/}
                    <SelectorProvincia placeholder="Provincia" name="state-code" onChange={setProvincia} />
                </div>

                <div className="grid grid-cols-1">
                    <Input name="last-name" placeholder="Apellido*" type="text" />
                    <Input name="email" placeholder="Email*" type="email" />
                    <SelectorLocalidades name="city" placeholder="Localidad*" provincia={provincia} />
                </div>
            </div>
        </>

    )
}

export const MeInteresaria = (props:any) => {

    function dummy() {}

    return (
        <>
            <div className='flex flex-col w-full my-4'>
                <Checkbox onChange={props.handleTratamiento} name="Tratamiento" label="Tratamiento" />
                <Checkbox onChange={props.handleMaquillaje} name="Maquillajes" label="Maquillajes" />
                <Checkbox onChange={dummy} name="Fragancias" label="Fragancias" />
            </div>
        </>

    )
}

export const QuisieraSaber = (props:any) => {
    return (
        <>
            <div className='flex flex-col w-full my-4'>
                <Checkbox onChange={props.handleChecks} name="Rostro" label="Rostro" />
                <Checkbox onChange={props.handleChecks} name="Labios" label="labios" />
                <Checkbox onChange={props.handleChecks} name="Ojos" label="Ojos" />
                <Checkbox onChange={props.handleChecks} name="Cuerpo" label="Cuerpo" />

            </div>
        </>

    )
}

export const Preocupacion = (props:any) => {
    return (
        <>
            <div className='md:flex'>
                <div className='flex flex-col w-full md:my-4 mt-4'>
                    <Checkbox onChange={props.handleChecks} name="Deshidratacion" label="Deshidratacion" />
                    <Checkbox onChange={props.handleChecks} name="Uniformidad del tono" label="Uniformidad del tono" />
                    <Checkbox onChange={props.handleChecks} name="Líneas finas Arrugas profundas" label="Líneas finas / Arrugas profundas" />
                    <Checkbox onChange={props.handleChecks} name="Textura" label="Textura" />
                </div>
                <div className='flex flex-col w-full md:my-4 mb-4'>
                    <Checkbox onChange={props.handleChecks} name="Acné" label="Acné" />
                    <Checkbox onChange={props.handleChecks} name="Falta de luminosidad" label="Falta de luminosidad" />
                    <Checkbox onChange={props.handleChecks} name="Pérdida de firmeza" label="Pérdida de firmeza" />
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
                    <Checkbox name="Descuentos y beneficios" label="Descuentos y beneficios" />
                    <Checkbox name="Aprender a usar los productos" label="Aprender a usar los productos" />
                </div>
                <div className='flex flex-col w-full md:my-4'>
                    <Checkbox name="Descubrir buenas reseñas" label="Descubrir buenas reseñas" />
                    <Checkbox name="AVolver a comprar" label="Volver a comprar" />
                </div>
            </div>
        </>

    )
}

export function Boton(props: any) {
    return (
        <button disabled={props.disabled} type="submit" className={`${props.disabled ? "bg-neutral-700 text-neutral-400" : "bg-black hover:bg-[#FFAFBC] text-white"} md:py-2 py-2 md:px-9 px-16 md:text-base text-[22px] mb-8 font-bold duration-200`}>{props.name}</button>
    )
}

export function Botona(props: any) {
    return (
        <a className='md:py-2 py-2 md:px-9 px-16 md:text-base text-[22px] mb-8 bg-black hover:bg-[#FFAFBC] text-white font-bold uppercase' target="_blank" href={props.href}>{props.name}</a>
    )
}