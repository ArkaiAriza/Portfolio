import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';

import GeneralOptionsContext from '../context/GeneralOptionsContext';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  background-color: #0006;
  color: white;
  z-index: 1000;
  overflow-y: auto;
`;

const Content = styled.div`
  position: relative;

  max-height: 90%;
  min-height: 60%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: auto;
  background-color: black;
  color: white;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  color: white;
  object-fit: contain;
  object-position: top center;
`;

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000c;
`;

const TextContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  text-align: center;
  font-size: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const SocialContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  box-sizing: border-box;
  font-size: 18px;
`;

const Button = styled.div`
  position: relative;
  height: 100%;
  min-width: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  background-color: #000;
  border: solid 1px #111;
  cursor: pointer;
`;

const Modal = () => {
  const { selectedProject, setProject } = useContext(GeneralOptionsContext);
  const ref = useRef();

  useEffect(() => {
    const onClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(selectedProject.name);

        if (selectedProject.name) {
          console.log('ads');

          setProject({});
        }
      }
    };

    document.body.addEventListener('click', onClick);

    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, [selectedProject]);

  if (!selectedProject.name) {
    return null;
  }
  return (
    <Container>
      <Content ref={ref}>
        <Image src={selectedProject.img}></Image>
        <Cover />
        <TextContainer>
          <h1>{selectedProject.name}</h1>
          <p>{selectedProject.description}</p>
          <SocialContainer>
            <a href={selectedProject.liveUrl} target='_blank' rel='noreferrer'>
              <Button>Live Demo</Button>
            </a>
            <a
              href={selectedProject.githubUrl}
              target='_blank'
              rel='noreferrer'
            >
              <Button>Github</Button>
            </a>
          </SocialContainer>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default Modal;
