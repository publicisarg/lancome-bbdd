import axios from "axios";
import React, { useEffect, useState } from "react";
import municipios from './municipios.json';

export function SelectorProvincia(props: any) {

    const Provincias = ["Provincia", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tucumán"];

    function buildOptionsJSX() {
        const jsx: any = [];
        Provincias.forEach((element: any, index: number) => {
            if (element == "Provincia") {
                jsx.push(<option key={index} value="">{element}</option>);
            } else {
                jsx.push(<option key={index} value={element}>{element}</option>);
            }

        });

        return jsx;
    }

    return (
        <select required placeholder={props.placeholder} name={props.name} onChange={(e) => { props.onChange(e.target.value) }} className="py-2 bg-transparent border-black border-b md:text-xl text-2xl my-4 placeholder-black font-light font-montserrat">
            {buildOptionsJSX()}
        </select>
    )
}

export function SelectorLocalidades(props: any) {

    const [localidades, setLocalidades] = useState<any>([]);

    useEffect(() => {
        if (props.provincia != "") {
            setLocalidades(municipios.localidades.filter(localidad => localidad.provincia.nombre == props.provincia));
        }
    }, [props.provincia])

    function toTitleCase(str) {
        if (!str) {
            return '';
        }
        const strArr = str.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
        return strArr.join(' ');
    }

    function buildOptionsJSX() {
        const jsx: any = [];
        if (localidades != undefined && props.provincia != "") {
            console.log(localidades);
            var localidadesOrdenadas = localidades.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
            localidadesOrdenadas.forEach((element: any, index: number) => {
                var actualData = toTitleCase(element.nombre);
                if (element == "Provincia") {
                    jsx.push(<option key={index} value="">{actualData}</option>);
                } else {
                    jsx.push(<option key={index} value={actualData}>{actualData}</option>);
                }
            });
        } else {
            jsx.push(<option value="">Seleccione una provincia primero</option>)
        }
        return jsx;
    }

    return (
        <select required placeholder={props.placeholder} name={props.name} className="py-2 bg-transparent border-black border-b md:text-xl text-2xl my-4 placeholder-black font-light font-montserrat">
            {buildOptionsJSX()}
        </select>
    )
}