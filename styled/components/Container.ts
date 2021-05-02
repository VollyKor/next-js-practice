import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 0px) {
    max-width: 300px;
  }

  @media screen and (min-width: 568px) {
    max-width: 400px;
  }

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1180px) {
    max-width: 1100px;
  }
`;
