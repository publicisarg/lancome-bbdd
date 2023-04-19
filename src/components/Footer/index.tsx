import React from "react"
import { Checkbox } from "../../common/Formulario/input"
import { Boton } from "../../common/Formulario/contenido-form"

export const Footer = () => {
    return (
        <>
        <div className="flex justify-center"> 
        <p className="text-[#8F8F8F] text-[15px] my-6">
        *TODOS LOS CAMPOS SON OBLIGATORIOS
        </p>
        </div>
        <div className="flex justify-center"> 
        <Checkbox name="legal" label="Acepto políticas de privacidad"/>
        </div>
        <div className="flex text-center"> 
        <p className="text-[13px] mt-3 mb-11">
            AL SUMINISTRARNOS TUS DATOS PERSONALES A L´OREAL ARGENTINA S.A., CONSENTÍS Y ACEPTÁS LA POLÍTICA DE PRIVACIDAD DE DATOS,
            LOS TÉRMINOS Y CONDICIONES DE USO Y NUESTRA POLÍTICA DE COOKIES. COMO TITULAR DE LOS DATOS PERSONALES TENÉS DERECHO A SOLICITAR EL ACCESO, RECTIFICACIÓN Y ACTUALIZACIÓN Y, EN SU CASO, SUPRESIÓN DE LOS MISMOS DE NUESTRA BASE DE DATOS DE CONFORMIDAD CON LA LEY 25.326 DE LA REPÚBLICA ARGENTINA.</p>
        </div>
        <div className='flex justify-center'>
      <Boton name="ENVIAR" />
      </div>
        </>
    )
  }
  export default Footer 