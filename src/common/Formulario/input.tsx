import React from 'react'

export function Input (props:any){
  return (
   <input name={props.name} type={props.type} placeholder={props.placeholder} className='border-b border-black text-xl my-4 p-4' />
  )
}
export function Checkbox (props:any) {
  return (
    <div>
    <input name={props.name} id={props.name} type='checkbox' className='mr-4'/>
    <label htmlFor={props.name}>{props.label}</label>
    </div>
  )
}