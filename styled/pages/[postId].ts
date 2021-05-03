import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
`

export const Body = styled.p`
  text-align: justify;

  &::first-letter {
    margin-left: 15px;
  }
`

export const StyledLink = styled.a`
  display: inline-block;
  padding: 5px 15px;
  background-color: grey;

  border: 2px solid transparent;
  border-radius: 5px;
  color: white;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border: 2px solid black;
  }
`
export const Button = styled.button`
  display: inline-block;
  background-color: grey;

  border: 2px solid transparent;
  border-radius: 5px;
  color: white;
  text-decoration: none;
`
export const Input = styled.input`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 15px;
`
export const Comment = styled.p`
  color: grey;
  margin-left: 10px;
`
