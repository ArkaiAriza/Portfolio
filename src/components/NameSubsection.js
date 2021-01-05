import React from 'react';
import styled, { css } from 'styled-components';

import MainText from './MainText';
import Options from './Options';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0a6;
  transition: 1s;
  ${(props) =>
    props.section === 'right'
      ? css`
          right: 0%;
          width: 40%;
          transition: 0.5s;
        `
      : props.section === 'left'
      ? css`
          cursor: pointer;
          left: 0%;
          width: 40%;
          transition: 0.5s;
        `
      : ''}
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  top: 5%;
  border-radius: 50%;

  background-color: black;

  cursor: pointer;

  opacity: 0;
  z-index: 0;

  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }

  transition: 1s;

  ${(props) =>
    props.section !== ''
      ? css`
          opacity: 1;
          z-index: 4;
        `
      : ''}
`;

const NameSubSection = ({
  section,
  setSection,
  baseSection,
  icon,
  iconClass,
  options,
}) => {
  return (
    <Container section={section}>
      {section === baseSection && (
        <Button onClick={() => setSection('')} section={section}>
          <i className={iconClass}>{icon}</i>
        </Button>
      )}
      {baseSection === 'left' ? (
        <MainText section={section} />
      ) : (
        section === baseSection && (
          <MainText section={section} style={{ zIndex: 3 }} />
        )
      )}
      {section === baseSection && (
        <Options options={options} style={{ zIndex: 3 }} />
      )}
    </Container>
  );
};

export default NameSubSection;
