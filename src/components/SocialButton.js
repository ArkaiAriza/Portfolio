import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  background-color: #0a6;

  &:hover {
    &:after {
      transform: scale(1, 0);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    right: -1px;
    transform: scale(1);
    background-color: #223;

    transition: 0.4s;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const SocialButton = ({ link, img }) => {
  return (
    <Container>
      <a href={link} target='_blank' rel='noreferrer'>
        <Image src={img} />
      </a>
    </Container>
  );
};

export default SocialButton;
