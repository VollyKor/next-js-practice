import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export const S_Link = styled.a`
  padding: 10px 15px;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  border: 1px solid transparent;

  @media screen and (min-width: 576px) {
    &:hover {
      cursor: pointer;
      border: 1px solid white;
    }
  }
`;

export const Header = styled.header`
  padding: 15px 0;
  background-color: black;
`;
