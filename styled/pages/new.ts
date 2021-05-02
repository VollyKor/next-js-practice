import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  width: 100%;
  text-align: center;
`

export const LabelText = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 15px;
`

export const Input = styled.input`
  box-sizing: border-box;
  margin-bottom: 15px;

  padding: 0 15px;

  width: 100%;
  max-width: 600px;
`

export const TextArea = styled.textarea`
  box-sizing: border-box;
  resize: vertical;
  padding: 15px;

  width: 100%;
  max-width: 600px;
`

export const Button = styled.button`
  margin-top: 15px;

  padding: 5px 15px;

  color: white;

  background-color: grey;
  border-radius: 5px;

  border: none;

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`
