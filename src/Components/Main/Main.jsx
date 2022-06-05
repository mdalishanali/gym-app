import React, { useState } from 'react'
import { Container } from '../GlobalComponents/Container'
import { Overlay } from '../GlobalComponents/Overlay'
import { MainInfo } from './MainInfo'
import { Nav } from './Navbar/Nav'

export const Main = () => {
  return (
    <section>
        <Overlay/> 
        <Nav/>
        <Container>
          <MainInfo/>
        </Container>
    </section>
  )
}
