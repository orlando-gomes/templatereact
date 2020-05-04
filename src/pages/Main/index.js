import React from 'react';

import { Title, SubTitle } from './styles';
/*
export default function Main() {
  return <Title>Hello world</Title>;
}
*/

// como se fosse error={true}
export default function Main() {
  return (
    <>
      <Title>
        Main
        <small error> menor</small>
      </Title>
      <SubTitle error>Subtitle</SubTitle>
    </>
  );
}
