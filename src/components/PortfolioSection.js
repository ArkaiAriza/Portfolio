import React, { useContext } from 'react'
import styled from 'styled-components'

import ProjectCard from './ProjectCard'

import movies from '../assets/movies.png'
import news from '../assets/news.png'
import podcasts from '../assets/podcasts.png'
import agrotransporte from '../assets/agrotransporte.png'

import GeneralOptionsContext from '../context/GeneralOptionsContext'

const educationInfo = [
  {
    year: '2016-2020',
    title: 'Systems Engineering',
    university: 'Universidad Nacional de Colombia',
  },
  { year: '2018-2019', title: 'Modern React with Redux', university: 'Udemy' },
  {
    year: '2019',
    title: 'Node with React: Fullstack Web Development',
    university: 'Udemy',
  },
  {
    year: '2020',
    title: 'The Complete React Native + Hooks Course',
    university: 'Universidad Nacional de Colombia',
  },
]

const experienceInfo = [
  {
    year: '2021-present',
    title: 'Full Stack Developer',
    university: 'MeltStudio',
  },
]

const projectInfo = [
  {
    name: 'Movies Demo',
    description:
      'In this project we use the API of themoviedb. On this page you will find a list of movies, each movie has information and you can click on it to see even more about it. The main features of this page are the movie grid, the info animations, the info modal, the pagination, the movie search, the genre filter and the menu.',
    img: movies,
    liveUrl: 'https://movieinfodemo.vercel.app/',
    githubUrl: 'https://github.com/ArkaiAriza/MoviesPortafolio',
  },
  {
    name: 'News Demo',
    description:
      'In this project we use the GNews API. In this page we find a series of news, each news redirects to its page of origin. The main features of this page are the news layout, the news carousel, the dark/normal mode, the search and advanced news search, the filter by type, the filter by country, and the menu.',
    img: news,
    liveUrl: 'https://newsdemo.vercel.app/',
    githubUrl: 'https://github.com/ArkaiAriza/NewsPortafolio',
  },
  {
    name: 'Podcasts Demo',
    description:
      'In this project we use the listennotes API. On this page you will find a variety of podcasts, each with its own series of episodes that can be played. The main features of this page are the podcast grid, the episode list by podcast, the audio player, the infinite scroll, the podcast and episode search, and the genre filter.',
    img: podcasts,
    liveUrl: 'https://podcastdemo.macastro9714.vercel.app/',
    githubUrl: 'https://github.com/ArkaiAriza/PodcastPortafolio',
  },
  {
    name: 'Agro Transporte',
    description:
      'Agrotransporte is a mobile app that seeks to connect agricultors and independent transporters. The app was made with ReactNative, while the backend uses ExpressJS and a MongoDB database. It includes google sing up, stripe payments and basic CRUD operations.',
    img: agrotransporte,
    liveUrl: 'https://expo.io/artifacts/594359c3-bfed-4e06-bcd7-a97bb3efd4d2',
    githubUrl: 'https://github.com/ArkaiAriza/AgroTransporte',
  },
]

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
`

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 7% 10% 15% 10%;
`

const Portfolio = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  box-sizing: border-box;
  font-size: 32px;
`

const MainText = styled.h1`
  margin: 0 0 1em 0;
  box-sizing: border-box;
  text-align: left;
`

const SecondaryContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  box-sizing: border-box;
  font-size: 32px;
`

const Image = styled.img`
  box-sizing: border-box;
  margin: 10px 0 50px 0;
  width: 300px;

  align-self: flex-start;
  flex: 0 0 20%;
  object-fit: contain;
`

const MyResume = styled.div`
  width: 100%;

  margin: 50px 0 0 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  box-sizing: border-box;
  font-size: 32px;
  text-align: left;
`
const ExperienceContainer = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;

  box-sizing: border-box;
`

const MyEducation = styled.div`
  margin: 0 0 0 5%;
  flex: 45%;
  min-width: 400px;
  display: flex;
  flex-flow: column;

  box-sizing: border-box;

  font-size: 32px;
  text-align: left;
`

const Item = styled.div`
  position: relative;
  height: content-fit;
  padding: 0 70px;
  border-left: solid 10px #ccc;

  &:hover {
    & h3 {
      font-size: 50px;
    }
    & .bullet {
      background-color: #0a6;
      border-color: white;
    }
  }
`

const BulletPoint = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: -1px;
  left: -25px;
  height: 40px;
  width: 40px;
  border: solid 5px #ccc;
  border-radius: 50%;
  background-color: #223;
`

const Year = styled.h3`
  margin: 0;
  transition: 0.5s;
  color: #ccc;
`
const Title = styled.h4`
  margin: 0;
  font-weight: 300;
  font-size: 0.8em;
  padding: 10px 0;
  color: #ccc;
`
const University = styled.h6`
  margin: 0;
  font-style: italic;
  font-size: 0.6em;
  color: #ccc;
`

const Divider = styled.div`
  position: relative;
  height: 50px;
  border-left: solid 10px #ccc;
`

const PortfolioSection = ({ section }) => {
  const { setProject } = useContext(GeneralOptionsContext)

  const renderEducation = () => {
    return educationInfo.map((item, index) => {
      return (
        <>
          <Item>
            <BulletPoint className="bullet" />
            <Year>{item.year}</Year>
            <Title>{item.title}</Title>
            <University onClick={() => setProject('asdasd')}>
              {item.university}
            </University>
          </Item>
          {index !== educationInfo.length - 1 && <Divider />}
        </>
      )
    })
  }

  const renderExperience = () => {
    return experienceInfo.map((item, index) => {
      return (
        <>
          <Item>
            <BulletPoint className="bullet" />
            <Year>{item.year}</Year>
            <Title>{item.title}</Title>
            <University onClick={() => setProject('asdasd')}>
              {item.university}
            </University>
          </Item>
          {index !== experienceInfo.length - 1 && <Divider />}
        </>
      )
    })
  }

  const renderProjects = () => {
    return projectInfo.map((item) => {
      return (
        <ProjectCard
          key={item.name}
          project={item}
          setProject={(value) => setProject(value)}
        />
      )
    })
  }

  return (
    <Container>
      <InnerContainer>
        <Portfolio id="my-portfolio">
          <MainText>My Portfolio</MainText>
          <SecondaryContainer>{renderProjects()}</SecondaryContainer>
        </Portfolio>
        <MyResume id="my-resume">
          <h1 style={{ flex: '1 0 100%' }}>My Resume</h1>
          <ExperienceContainer>
            <MyEducation>
              <h3 style={{ margin: '0 0 3% -3%' }}>My Education</h3>
              {renderEducation()}
            </MyEducation>
            <MyEducation>
              <h3 style={{ margin: '0 0 3% -3%' }}>My Experience</h3>
              {renderExperience()}
            </MyEducation>
          </ExperienceContainer>
        </MyResume>
      </InnerContainer>
    </Container>
  )
}

export default PortfolioSection
