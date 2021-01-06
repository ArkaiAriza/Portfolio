import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 5% 2%;
  background-color: #0a6;
  &:hover {
    & .inner {
      transform: scale(0.95, 0.92);
    }

    & .reflect {
      transform: translateX(-600px) translateY(600px) skew(0deg, 40deg);
    }

    & .title {
      opacity: 1;
    }

    & div {
      opacity: 1;
    }
  }
  cursor: pointer;
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  overflow: hidden;
`;

const Title = styled.h3`
  position: absolute;
  left: 10px;
  bottom: 10px;
  margin: 0;
  opacity: 0;
  transition: 0.4s;
`;

const Image = styled.img`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.4s;
  background-color: #0008;

  &:hover {
    opacity: 1;
  }
`;

const Reflect = styled.div`
  position: absolute;
  top: -250px;
  bottom: 0;
  left: 160px;
  right: 0;
  height: 300px;
  width: 800px;
  background-color: #ccca;

  transform: skew(0deg, 40deg);
  transition: 0.5s;
`;

const ProjectCard = ({ project, setProject }) => {
  return (
    <Container onClick={() => setProject(project)}>
      <InnerContainer className='inner'>
        <Image src={project.img} />
        <Cover />
        <Reflect className='reflect' />
        <Title className='title'>{project.name}</Title>
      </InnerContainer>
    </Container>
  );
};

export default ProjectCard;
