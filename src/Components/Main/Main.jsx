import React, { useState } from 'react'
import { Container } from '../GlobalComponents/Container'
import { Overlay } from '../GlobalComponents/Overlay'
import { MainInfo } from './MainInfo'
import { Nav } from './Navbar/Nav'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import mainBgOne from "../Images/mainBgOne.png";
export const Main = () => {
  return (
    <section css={styles}>
        <Overlay/> 
        <Nav/>
        <Container>
          <MainInfo/>
        </Container>
    </section>
  )
}

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: url("${mainBgOne}") no-repeat center/cover;
  display: flex;
  position: relative;
  .container{
    margin: auto;
    text-align: center;
    color: #fff;
      z-index: 2;
  }
  @media (max-width:965px){
    .container{
      max-width: 90%;
    }
  }
`