import React from 'react'

export function Input (props:any){
  return (
   <input name={props.name} type={props.type} placeholder={props.placeholder} className='uppercase border-b border-black text-xl my-4 p-2 focus:outline-none font-montserrat font-regular placeholder:to-black' />
  )
}
export function Checkbox (props:any) {
  return (
    <div>
    <input name={props.name} id={props.name} type='checkbox' className='mr-4'/>
    <label htmlFor={props.name} className='font-light font-montserrat'>{props.label}</label>
    </div>
  )
}