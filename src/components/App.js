import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './Modal'
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

import { GeneralOptionsProvider } from '../context/GeneralOptionsContext'

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-flow: row no-wrap;
  overflow: hidden;
`

const App = () => {
  const [section, setSection] = useState('')
  const [hover, setHover] = useState('')

  return (
    <GeneralOptionsProvider>
      <Container>
        <Modal />
        <Left
          section={section}
          setHover={setHover}
          setSection={setSection}
          hover={hover}
        />
        <Right
          section={section}
          setHover={setHover}
          setSection={setSection}
          hover={hover}
        />
        <Footer />
      </Container>
    </GeneralOptionsProvider>
  )
}

export default App
