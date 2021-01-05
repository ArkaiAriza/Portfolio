import React from 'react';
import styled, { css } from 'styled-components';

import SkillCard from './SkillCard';
import SocialButton from './SocialButton';

import github from '../assets/github.png';
import aws from '../assets/aws.png';
const IMG = 'http://demo.2webros.com/myvitae/img/profilepic.png';

const skillsInfo = [
  {
    title: 'HTML',
    img:
      'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png',
  },
  {
    title: 'CSS',
    img: 'https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png',
  },
  {
    title: 'JavaScript',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
  },
  {
    title: 'React',
    img: 'https://cdn.auth0.com/blog/react-js/react.png',
  },
  {
    title: 'Redux',
    img: 'https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png',
  },
  {
    title: 'React Native',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  },
  {
    title: 'NodeJS',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
  },
  {
    title: 'Express JS',
    img:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png',
  },
  {
    title: 'MongoDB',
    img:
      'https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png',
  },
  {
    title: 'GraphQL',
    img: 'https://dwglogo.com/wp-content/uploads/2018/01/GraphQL_logo.png',
  },
  {
    title: 'Docker',
    img:
      'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png',
  },
  {
    title: 'AWS',
    img: aws,
  },
];

const socialInfo = [
  {
    link: 'https://www.linkedin.com/in/arkai-julian-ariza-millares-a54466202/',
    img: 'https://bestpractice.bmj.com/images/linkedIn_logo_circle.png',
  },
  {
    link: 'https://github.com/ArkaiAriza',
    img: github,
  },
];

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 80%;
  background-color: #112;
  color: white;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 7% 10% 15% 10%;
`;

const Info = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column nowrap;

  box-sizing: border-box;
  font-size: 32px;
`;

const MainText = styled.h1`
  margin: 0 0 1em 0;
  box-sizing: border-box;
  text-align: right;
  flex: 1 0 100%;
`;

const SecondaryContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-around;

  box-sizing: border-box;
  font-size: 32px;
`;

const InfoText = styled.h5`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 5px 0 0;

  text-align: right;
  flex: 0 0 70%;
  font-weight: 300;

  & p {
    margin: 0 0 30px 0;
  }
`;

const Image = styled.img`
  box-sizing: border-box;
  margin: 10px 0 50px 0;
  width: 300px;

  align-self: end;
  flex: 0 0 20%;
  object-fit: contain;
`;

const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 50px;
  width: 250px;
  background-color: #0a6;

  &:hover {
    &:before {
      transform: scale(0);
    }
  }

  &:before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    right: -1px;
    transform: scale(1);
    background-color: black;

    transition: 0.4s;
  }
`;

const MySkills = styled.div`
  width: 100%;

  margin: 50px 0 0 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  box-sizing: border-box;
  font-size: 32px;
  text-align: right;
`;

const ContactSection = styled.div`
  width: 100%;

  margin: 50px 0 0 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  box-sizing: border-box;
  font-size: 32px;
  text-align: right;

  & p {
    margin: 5px;
    font-weight: 300;
  }
`;

const SocialContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  margin: 50px 0 0 0;
  box-sizing: border-box;
  font-size: 32px;
  text-align: right;
`;

const InfoSection = ({ section }) => {
  const renderSkills = () => {
    return skillsInfo.map((skill) => {
      return <SkillCard title={skill.title} img={skill.img} />;
    });
  };

  const renderSocials = () => {
    return socialInfo.map((social) => {
      return <SocialButton img={social.img} link={social.link} />;
    });
  };

  return (
    <Container>
      <InnerContainer>
        <Info id='about-me'>
          <MainText>Hello, My Name is Arkai</MainText>
          <SecondaryContainer>
            <InfoText>
              <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                Arkai Ariza, 27 years old, born and grew up in Puente Nacional,
                Colombia. Highly motivated creative engineer and software
                developer, focused on frontend technologies.
              </p>
              <p>
                I've been developing several engineering projects this lasts
                years. I've learned to work as part of a team, with effective
                communication, in order to fulfill the client needs. My
                experience is mainly based on frontend using the React framework
                to develop interactive and responsive web applications.
              </p>
              <p>
                I am a fast learner and avid reader. I like to solve problems
                and face interesting challenges, and I am willing to learn and
                adapt to different situations.
              </p>
              <Button>
                <h6 style={{ margin: 0, zIndex: 3, position: 'absolute' }}>
                  DOWNLOAD RESUME
                </h6>
              </Button>
            </InfoText>
            <Image src={IMG} />
          </SecondaryContainer>
        </Info>
        <MySkills id='my-skills'>
          <h1 style={{ flex: '1 0 100%' }}>My Skills</h1>
          {renderSkills()}
        </MySkills>
        <ContactSection id='contact'>
          <h1 style={{ flex: '1 0 100%' }}>Contact Me</h1>
          <p
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}
          >
            I am available for remote work!
          </p>
          <p>
            arjarizami@unal.edu.co | +57 3214595135 | Puente Nacional, Colombia
          </p>
          <SocialContainer>{renderSocials()}</SocialContainer>
        </ContactSection>
      </InnerContainer>
    </Container>
  );
};

export default InfoSection;
