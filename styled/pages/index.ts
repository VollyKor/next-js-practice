import styled from 'styled-components';
export const PageTitle = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-gap: 15px;

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const ListItem = styled.li`
  border: 1px solid grey;
  border-radius: 5px;
`;

export const ListTitle = styled.p`
  margin: 10px 10px;

  font-weight: 600;
  text-align: center;
`;
export const ListBody = styled.p`
  margin: 10px 10px;
  font-size: 0.8rem;

  color: grey;

  &::first-letter {
    margin-left: 10px;
  }
`;

export const ListLink = styled.a`
  display: inline-block;
  padding: 5px 10px;
  margin-left: 10px;
  margin-bottom: 10px;

  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
    color: white;

    background-color: grey;
    border-radius: 5px;
  }
`;
