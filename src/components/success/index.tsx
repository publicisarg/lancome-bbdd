import React from 'react'
import { Gracias } from '../../common/UI/gracias'
import { Headersuccess, Headerunsuccess } from '../../common/UI/header'
import { Logo, LogoError } from '../../common/UI/logo'
import { Ups } from '../../common/UI/ups'



export const Succes = () => {
  return (

    <div>
      {false &&
        <div className="w-full h-screen flex justify-center items-center">
          <div className='flex flex-col justify-center item-center text-center border border-solid border-black w-9/12 m-auto md:w-[720px] bg-cover'>
            <Headersuccess />
            <Logo />
            <Gracias />
          </div>
        </div>}
      {false &&
        <div className="w-full h-screen flex justify-center items-center">
          <div className='flex flex-col justify-center item-center  text-center border border-solid border-black w-9/12 m-auto md:w-[720px] bg-cover'>
            <Headerunsuccess />
            <LogoError />
            <Ups />
          </div>
        </div>}
    </div>
  )
}
