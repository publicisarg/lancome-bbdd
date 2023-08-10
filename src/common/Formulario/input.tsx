import React, { useEffect, useState } from 'react'

export function Input(props: any) {

  const [type, setType] = useState('text');
  const [max, setMax] = useState('');

  useEffect(() => {
    if (props.type != "datetime-local") {
      setType(props.type);
    } else {
      let currentDate = new Date().toJSON().slice(0, 10);
      setMax(currentDate);
    }
  }, [])

  function handleFocus() {
    if (props.type == 'datetime-local') {
      setType('date');
    }
  }

  return (
    <input onFocus={handleFocus} max={max} name={props.name} className='uppercase border-b border-black text-xl my-4 p-2 focus:outline-none font-montserrat font-regular placeholder:to-black' type={type} placeholder={props.placeholder} required />
  )
}

export function Checkbox(props: any) {
  return (
    <div>
      <input value={props.value} onChange={(e) => props.onChange(e)} required={props.required} name={props.name} id={props.name} type='checkbox' className='mr-4' />
      <label htmlFor={props.name} className='font-light font-montserrat'>{props.label}</label>
    </div>
  )
}