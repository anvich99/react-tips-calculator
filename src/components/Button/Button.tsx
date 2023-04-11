import React from 'react'
import { ButtonStyle } from './styles'
interface ButtonProps{
  // onClick:any,
  text: string
}
export const Button = ({text}: ButtonProps) => {
  return (
    <ButtonStyle type='submit'>{text}</ButtonStyle>
  )
}
