import React from 'react';
import styled, { css } from 'styled-components';

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  transition: 1s;

  ${(props) =>
    props.section === 'left' || props.section === 'right'
      ? css`
          transform: scale(0.5, 0.5);
          transition: 0.5s;
        `
      : ''}
`;

const Text = styled.div`
  display: flex;
  color: white;
`;

const Divider = styled.div`
  height: 2px;
  width: 60%;
  background-color: white;
  margin: 10% 0;
`;

const MainText = ({ section, style }) => {
  return (
    <TextGroup section={section} style={style}>
      <Text style={{ fontSize: '3vw' }} section={section}>
        HI, I AM
      </Text>
      <Text style={{ fontSize: '8vw', fontWeight: 'bold' }} section={section}>
        ARKAI
      </Text>
      <Text
        style={{ fontSize: '8vw', fontWeight: 'bold', lineHeight: 0.7 }}
        section={section}
      >
        ARIZA
      </Text>
      <Divider />
      <Text style={{ fontSize: '2vw' }}>WEB DEVELOPER</Text>
    </TextGroup>
  );
};

export default MainText;
