import React from 'react'
import { useField, Field } from 'formik';

export default function Input({name, type, className, children}) {
  const [field, meta] = useField(name);
  return (
    <div className='form-row-item'>
      <Field 
        id={name}
        name={name} 
        className={`${meta.touched && meta.error && 'invalid'}`}
        type={type}
      />
      {children}
    </div>
  )
}