import React, { InputHTMLAttributes } from 'react'
import { InputStyle } from './styles'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <InputStyle {...props}/>
  )
}
