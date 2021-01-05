import React from 'react';
import styled, { css } from 'styled-components';

import InfoSection from './InfoSection';
import InteractiveArrow from './InteractiveArrow';
import NameSubSection from './NameSubsection';

const optionsLeft = [
  { label: 'ABOUT ME', href: '#about-me' },
  { label: 'MY SKILLS', href: '#my-skills' },
  { label: 'CONTACT', href: '#contact' },
];

const Container = styled.div`
  position: absolute;
  width: 130%;
  height: 100%;

  right: 50%;
  display: flex;

  background-color: #0a6;
  transition: 1s;

  ${(props) =>
    props.section === 'left'
      ? css`
          transform: translateX(61.5%);
          transition: transform 0.5s;
          z-index: 5;
        `
      : props.section === 'right'
      ? css`
          transform: translateX(-61.5%);
        `
      : ''}
`;

const NameSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  cursor: pointer;
  background-color: #0a6;
  overflow: hidden;
`;

const Left = ({ section, setHover, setSection, hover }) => {
  return (
    <Container
      onClick={section !== 'left' ? () => setSection('left') : null}
      onMouseEnter={() => setHover('left')}
      onMouseLeave={() => setHover('')}
      section={section}
    >
      <InfoSection section={section} />
      <NameSection section={section}>
        <InteractiveArrow direction={'left'} hover={hover} section={section}>
          <div>ABOUT ME</div>
          <i className='material-icons md-24'>arrow_back</i>
        </InteractiveArrow>

        <NameSubSection
          section={section}
          baseSection={'left'}
          icon={'keyboard_arrow_right'}
          iconClass='material-icons md-light md-ad'
          options={optionsLeft}
          setSection={setSection}
        />
      </NameSection>
    </Container>
  );
};

export default Left;
