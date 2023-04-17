import React from 'react'

export const Portada = () => {
  return (
    <header>
      <div className='bg-black py-3 flex justify-center items-center'>
        <img alt='Logo' src='/../public/img/Landing-Lancome.svg' className='w-60'/>
      </div>
      <div className='bg-[#FFAFBC] justify-center '>
      <img alt='portada' src='/../public/img/portada.png' className='w-full'/>
      </div>
    </header>
  )
}

export const Title = () => {
  return (
    <section className='bg-[#FFAFBC] py-9 justify-center text-center'>
       <h3 className='font-quentin text-5xl'>Bonjour</h3>
       <p className='text-5xl'>¡QUEREMOS CONOCERTE MEJOR!</p>
    </section>
  )
}
