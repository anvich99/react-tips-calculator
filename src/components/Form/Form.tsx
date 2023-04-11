import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ButtonStyle } from '../Button/styles'
import { InputStyle } from '../Input/styles'
import { AllInputs, FormStyle, Subtitle, Title, Total } from './styles'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { SingleValue } from 'react-select'
import { Option } from '../../types/types'

export const Form = () => {
    
  const OPTION:Option[] = [{value: 10, label: "10%"},
                          {value: 15, label: "15%"},
                          {value: 20, label: "20%"}];

  const [bill, setBill] = useState("");
  const [persons, setPersons] = useState("");
  const [percent, setPercent] = useState<number | string>(OPTION[0].label);
  const [result, setResult] = useState(0);
  const [isDisabled, setisDisabled] = useState(true);
  const [selectValue, setSelectValue] = useState(OPTION[0].value);

  const handleBillValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value)
  }
  const handlePersonsValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value)
  }
  const handleSelectValue = (value:number) => {
    setPercent(value)
  }
  const onChangeSelect = (event: SingleValue<Option>)  =>{
    if(event){
      handleSelectValue(event.value)
    }
  } 
  const handleCalculateTips = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    setResult((+bill + +bill*(+percent/100))/ +persons)
  }
  
  useEffect(() => {
    if (bill && persons) {
        setisDisabled(false);
    } else {
        setisDisabled(true);
    }
}, [bill, persons]);

  return (
    <FormStyle onSubmit = {handleCalculateTips}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <AllInputs>
        <InputStyle placeholder = "Enter bill" value={bill} onChange = {handleBillValue}></InputStyle>
        <InputStyle placeholder = "Enter persons" value={persons} onChange = {handlePersonsValue}></InputStyle>
        <CustomSelect options = {OPTION} onChangeSelect = {onChangeSelect} defaultValue = {OPTION[0]}/>
      </AllInputs>
      
      <Total>Total: {result.toFixed(2)}$</Total>
      <ButtonStyle disabled = {isDisabled}> Ohhhoooo 🍻</ButtonStyle>
    </FormStyle>
  )
}


