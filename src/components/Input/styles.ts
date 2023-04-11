import styled from 'styled-components'

const InputStyle = styled.input`
  padding: 21px 191px;
  background: #FFFFFF;
  border: none;
  border-radius: 30px;
  text-align: center;
  @media (max-width: 744px) {
    padding: 21px 107px;
  }
  ::placeholder{
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: rgba(117, 108, 108, 0.6);
  }
`

export {InputStyle}