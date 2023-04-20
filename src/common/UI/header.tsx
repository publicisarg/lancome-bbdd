import React from 'react'

export const Headersuccess = () => {
  return (
    <div>
        <section className='bg-[#FFAFBC]/50 py-9 justify-center text-center'>
       <h3 className='font-quentin text-5xl'>¡Muchas gracias!</h3>
    </section>
    </div>
  )
}

export const Headerunsuccess = () => {
  return (
    <div>
      <section className='text-[#FFAFBC] py-9 justify-center text-center bg-black'>
    <h3 className='font-quentin text-5xl'>¡Lo sentimos!</h3>
    </section>
    </div>
  )
}
