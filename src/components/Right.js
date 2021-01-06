import React from 'react';
import styled, { css } from 'styled-components';

import PortfolioSection from './PortfolioSection';

import InteractiveArrow from './InteractiveArrow';
import NameSubSection from './NameSubsection';
import IMG from '../assets/full2.jpg';

const optionsRight = [
  { label: 'MY PORTFOLIO', href: '#my-portfolio' },
  { label: 'MY RESUME', href: '#my-resume' },
];

const Container = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  height: 100%;
  width: 130%;

  transition: 1s;
  background-color: #0a6;

  ${(props) =>
    props.section === 'right'
      ? css`
          transform: translateX(-61.5%);
          transition: transform 0.5s;
          z-index: 5;
        `
      : props.section === 'left'
      ? css`
          transform: translateX(61.5%);
        `
      : ''}
`;

const ImageSection = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${IMG}) no-repeat center top;
  background-size: cover;

  ${(props) =>
    props.section === 'right'
      ? css`
          filter: blur(10px);
        `
      : ''}
  transition: 1s;
`;

const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background-color: #0a6a;
  opacity: 0;
  z-index: 0;

  ${(props) =>
    props.section === 'right'
      ? css`
          opacity: 1;
          z-index: 2;
        `
      : ''}
  transition: z-index 0s, opacity 1s;
`;

const Right = ({ section, setHover, setSection, hover }) => {
  return (
    <Container
      onClick={section !== 'right' ? () => setSection('right') : null}
      onMouseEnter={() => setHover('right')}
      onMouseLeave={() => setHover('')}
      section={section}
    >
      <ImageSection section={section}>
        <InteractiveArrow direction={'right'} hover={hover} section={section}>
          <i className='material-icons md-24'>arrow_forward</i>
          <div>PORTFOLIO</div>
        </InteractiveArrow>
        <NameSubSection
          section={section}
          baseSection={'right'}
          icon={'keyboard_arrow_left'}
          iconClass='material-icons md-light md-ad'
          options={optionsRight}
          setSection={setSection}
        />

        <Image section={section} />
        <Cover section={section} />
      </ImageSection>
      <PortfolioSection section={section}></PortfolioSection>
    </Container>
  );
};

export default Right;
