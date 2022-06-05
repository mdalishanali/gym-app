import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../../GlobalComponents/Container';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Button } from '../../GlobalComponents/Button';
export const Nav = () => {
    const[openMenu,setopenMenu]=useState(false)
  return (
   <nav css={styles}>
            <Container>
               <Logo/>  
               <Menu openMenu={openMenu}/> 
                <Button text="join us"/>   
                <i
          onClick={() => setopenMenu(!openMenu)}
          id="burgerMenu"
          className={
            openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
          }
        ></i>
            </Container>
   </nav>
  )
}

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 0;
  .container {
    max-width: 78%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 1225px) {
    .container {
      max-width: 90%;
      .btn {
        display: none;
      }
      #burgerMenu {
        display: block;
      }
    }
  }
`;