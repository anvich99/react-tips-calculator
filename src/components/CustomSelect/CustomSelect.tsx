import React from 'react'
import Select, { SingleValue } from 'react-select'
import { selectStyle } from './styles'

interface CustomSelectProps{
  value:number,
  label:string,
}
interface PropsCustom{
  options: CustomSelectProps[],
  onChangeSelect: (event: SingleValue<CustomSelectProps>) => void,
  defaultValue: CustomSelectProps
}
export const CustomSelect = ({options, onChangeSelect}:PropsCustom) => {
  return (
    <Select  options = {options} onChange={onChangeSelect} defaultValue={options[0]} styles = {selectStyle}/>
  )
}
