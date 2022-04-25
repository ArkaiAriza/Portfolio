import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  position: absolute;

  bottom: 0;
  height: fit-content;
  width: 100%;
  background-color: white;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;

  z-index: 3;

  transform: translateY(100%);

  ${(props) =>
    props.showFooter
      ? css`
          transform: translateY(0%);
        `
      : ''}
  transition: 0.5s;
`

const Text = styled.p`
  flex: 0 0 30%;
  min-width: 200px;
  text-align: center;
`

const Arrow = styled.div`
  position: absolute;
  top: -50px;
  height: 50px;
  width: 100px;
  left: 50%;
  transform: translateX(-50px);
  border-radius: 50px 50px 0 0;

  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  background-color: white;
  z-index: 3;
  opacity: 1;
  cursor: pointer;
`

const Button = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
  padding: 0 30%;
  background-color: #223;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 30%;
  min-width: 200px;
  text-align: center;
`

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false)

  return (
    <Container showFooter={showFooter}>
      <Arrow onClick={() => setShowFooter(!showFooter)}>
        <i className="material-icons md-24">
          {showFooter ? 'arrow_downward' : 'arrow_upward'}
        </i>
      </Arrow>
      <Text>
        I developed these projects together with my friend{' '}
        <a
          href="https://resumewebpage.macastro9714.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0a6', fontWeight: 'bold' }}
        >
          Miguel Angel Castro
        </a>
        , through pair programming we both got motivated and completed this
        portfolio of projects.
      </Text>
      <Text>
        These pages are based on React, each highlighting different
        functionalities. We create diagrams in the initial stages of the design
        of each project{' '}
        <a
          href="https://drive.google.com/drive/folders/1jY_yZw6WQ35OKyDBEzSPXxVwzibdgEBC"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0a6', fontWeight: 'bold' }}
        >
          (you can check them here)
        </a>
        . Also,{' '}
        <a
          href="https://github.com/ArkaiAriza?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0a6', fontWeight: 'bold' }}
        >
          (here)
        </a>{' '}
        you can find the project repositories.
      </Text>
      <ButtonContainer>
        <a
          href={'https://github.com/ArkaiAriza/Portfolio/tree/master'}
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            <div>GitHub</div>
          </Button>
        </a>
      </ButtonContainer>
    </Container>
  )
}

export default Footer
