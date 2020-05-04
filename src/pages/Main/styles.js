import styled from 'styled-components';
/*
export const Title = styled.h1`
  color: #fff;
`;
*/

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.error ? 'red' : '#00ff00')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    /*color: #333;*/

    color: ${(props) => (props.error ? 'red' : '#00ff00')};
  }
`;

export const SubTitle = styled.h1`
  color: ${(props) => (props.error ? '#ffaaaa' : '#ff0000')};
`;
