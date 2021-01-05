import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 45%;
  height: 100px;
  width: 200px;

  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background-color: white;
  z-index: 3;
  opacity: 1;

  transition: 0.3s ease-out 0.1s;

  ${(props) =>
    props.direction === 'right'
      ? css`
          right: 0;
          border-radius: 50px 0 0 50px;
          transform: translateX(70%);
        `
      : css`
          left: 0;
          border-radius: 0 50px 50px 0;
          transform: translateX(-70%);
        `}

  ${(props) =>
    props.hover === props.direction
      ? css`
          transform: translateX(0%);
        `
      : css``}

      ${(props) =>
    props.section !== ''
      ? css`
          opacity: 0;
        `
      : css``}
`;

const InteractiveArrow = ({ children, direction, hover, section }) => {
  return (
    <Container direction={direction} hover={hover} section={section}>
      {children}
    </Container>
  );
};

export default InteractiveArrow;
