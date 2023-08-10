import React, { useState } from 'react'
import { Input, Checkbox } from '../input'
import { SelectorLocalidades, SelectorProvincia } from '../../selectores';

export const DatosPersonales = () => {

    const [provincia, setProvincia] = useState("");

    return (
        <>
            <div className="grid md:grid-cols-2 grids-cols-1 md:gap-8 gap-0 mt-16 mb-12">
                <div className="grid grid-cols-1">
                    <Input name="first-name" placeholder="Nombre*" type="text" />
                    <Input name="birthday" placeholder="Fecha de nacimiento*" type="datetime-local" />
                    {/*<Input name="provincia" placeholder="Provincia*" type="text"/>*/}
                    <SelectorProvincia placeholder="PROVINCIA" name="state-code" onChange={setProvincia} />
                </div>

                <div className="grid grid-cols-1">
                    <Input name="last-name" placeholder="Apellido*" type="text" />
                    <Input name="email" placeholder="Email*" type="email" />
                    <SelectorLocalidades name="city" placeholder="LOCALIDAD" provincia={provincia} />
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
                <Checkbox onChange={props.handleTratamiento} name="CATEGORY" value="SKIN" label="Tratamiento" />
                <Checkbox onChange={props.handleMaquillaje} name="CATEGORY" value="MAKE UP" label="Maquillajes" />
                <Checkbox onChange={dummy} name="PERFUME MOMENT" value="ALL THE TIME" label="Fragancias" />
            </div>
        </>

    )
}

export const QuisieraSaber = (props:any) => {
    return (
        <>
            <div className='flex flex-col w-full my-4'>
                <Checkbox onChange={props.handleInterests} name="ZONE" value="FACE" label="Rostro" />
                <Checkbox onChange={props.handleInterests} name="ZONE" value="LIP" label="Labios" />
                <Checkbox onChange={props.handleInterests} name="ZONE" value="EYES" label="Ojos" />
                <Checkbox onChange={props.handleInterests} name="ZONE" value="WHOLE BODY" label="Cuerpo" />

            </div>
        </>

    )
}

export const Preocupacion = (props:any) => {
    return (
        <>
            <div className='md:flex'>
                <div className='flex flex-col w-full md:my-4 mt-4'>
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="DEHYDRATION" label="Deshidratacion" />
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="UNEVEN SKIN TONE" label="Uniformidad del tono" />
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="FINE LINES" label="Líneas finas / Arrugas profundas" />
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="IRREGULAR TEXTURE" label="Textura" />
                </div>
                <div className='flex flex-col w-full md:my-4 mb-4'>
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="ACNE" label="Acné" />
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="LACK OF RADIANCE" label="Falta de luminosidad" />
                    <Checkbox onChange={props.handleChecks} name="CONCERN" value="LACK OF FIRMNESS" label="Pérdida de firmeza" />
                </div>
            </div>
        </>
    )
}

export const Buscando = (props:any) => {
    return (
        <>
            <div className='md:flex'>
                <div className='flex flex-col w-full md:my-4 mt-4'>
                    <Checkbox onChange={props.handleSearching} name="GOAL" value="BENEFIT FROM A PROMOTION" label="Descuentos y beneficios" />
                    <Checkbox onChange={props.handleSearching} name="GOAL" value="LEARN HOW TO CREATE A LOOK" label="Aprender a usar los productos" />
                </div>
                <div className='flex flex-col w-full md:my-4'>
                    <Checkbox onChange={props.handleSearching} name="GOAL" value="DISCOVER A GOOD REVIEW" label="Descubrir buenas reseñas" />
                    <Checkbox onChange={props.handleSearching} name="GOAL" value="REPURCHASE" label="Volver a comprar" />
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