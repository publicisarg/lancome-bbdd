import React, { useEffect, useState } from "react";
import municipios from './municipios.json';

export function SelectorProvincia(props: any) {

    const [color, setColor] = useState("text-[#a1a8b4]");

    const Provincias = ["Provincia", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tucumán"];

    function buildOptionsJSX() {
        const jsx: any = [];
        Provincias.forEach((element: any, index: number) => {
            if (element == "Provincia") {
                jsx.push(<option key={index} value="">PROVINCIA</option>);
            } else {
                jsx.push(<option key={index} value={element}>{element}</option>);
            }

        });

        return jsx;
    }

    function changeColor(value) {
        if (value != "") {
            setColor("text-black");
        } else {
            setColor("text-[#a1a8b4]");
        }
        props.onChange(value);
    }

    return (
        <select required placeholder={props.placeholder} name={props.name} onChange={(e) => { changeColor(e.target.value) }} className={`${color} py-2 bg-transparent border-black border-b md:text-xl text-2xl my-4 placeholder-black font-montserrat`}>
            {buildOptionsJSX()}
        </select>
    )
}

export function SelectorLocalidades(props: any) {

    const [localidades, setLocalidades] = useState<any>([]);
    const [color, setColor] = useState("text-[#a1a8b4]");

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
            var localidadesOrdenadas = localidades.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
            localidadesOrdenadas.forEach((element: any, index: number) => {
                var actualData = toTitleCase(element.nombre);
                if (actualData == "Provincia") {
                    jsx.push(<option key={index} value="">PROVINCIA</option>);
                } else {
                    jsx.push(<option key={index} value={actualData}>{actualData}</option>);
                }
            });
        } else {
            jsx.push(<option key={0} value="">SELECCIONE UNA PROVINCIA PRIMERO</option>)
        }
        return jsx;
    }

    function changeColor(value) {
        if (value != "") {
            setColor("text-black");
        } else {
            setColor("text-[#a1a8b4]");
        }
    }

    return (
        <select required onChange={(e) => { changeColor(e.target.value) }} placeholder={props.placeholder} name={props.name} className={`${color} py-2 bg-transparent border-black border-b md:text-xl text-2xl my-4 placeholder-black font-montserrat`}>
            {buildOptionsJSX()}
        </select>
    )
}