import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  padding: 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 2%;
  background-color: #112;
`;

const Title = styled.h3`
  margin: 0;
  text-align: center;
`;

const Image = styled.img`
  box-sizing: border-box;
  max-height: 80%;
  max-width: 100%;
  object-fit: cover;
`;

const SkillCard = ({ title, img }) => {
  return (
    <Container>
      <Image src={img} />
      <Title>{title}</Title>
    </Container>
  );
};

export default SkillCard;
