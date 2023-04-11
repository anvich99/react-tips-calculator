import styled from 'styled-components'

const FormStyle = styled.form`
  display: grid;
  grid-gap: 45px;
  justify-items: center;
  max-width: 580px;
  @media (max-width: 744px) {
    max-width: 450px;
  }
  
`
const Title = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 35px;
  }
`

const Subtitle = styled.h3`
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 28px;
  }
`
const AllInputs = styled.div`
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  @media (max-width: 744px){
    gap: 17px;
  }
`
const Total = styled.p`
  justify-self: start;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
`
export {FormStyle, Title, Subtitle, AllInputs, Total}