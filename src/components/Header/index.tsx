import React from 'react'

export const Portada = () => {
  return (
    <header>
      <div className='bg-black py-3 flex justify-center items-center'>
        <img alt='Logo' src='/../public/img/Landing-Lancome.svg' className='w-60'/>
      </div>
      <div className='bg-[#FFAFBC]/50 justify-center '>
      <img alt='portada' src='/../public/img/portada.png' className='w-full'/>
      </div>
    </header>
  )
}

export const Title = () => {
  return (
    <section className='bg-[#FFAFBC]/50 py-9 justify-center text-center'>
       <h3 className='font-quentin text-5xl'>Bonjour</h3>
       <p className="text-4xl font-montserrat font-regular mt-4">¡QUEREMOS CONOCERTE MEJOR!</p>
    </section>
  )
}
