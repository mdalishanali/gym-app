import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const Menu = ({openMenu}) => {
  return (
    <div css={styles} className={openMenu?"menu":"hidden"}>
        <a href="#home">home</a>
        <a href="#home">about</a>
        <a href="#home">pricing</a>
        <a href="#home">gallery</a>
        <a href="#home">pages</a>
        <a href="#home">blog</a>
        <a href="#home">contact</a>
    </div>
  )
}

const styles = css`
a{
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 22px;
    position: relative;
    transition: color 700ms ease-in-out;
    &::after{
       position : absolute;
       content: "";
       background: #ff1414;
       width: 100%;
       height: 3px;
       bottom: -33px;
       left: 0;
       opacity: 0;
       transform: opacity 700ms ease-in-out;

    }
    &:hover{
        color: #ff1414;
        &::after{
            opacity: 1;
        }
    }
}
@media (max-width:1225px){
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background: #060706;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out ;
    &.hidden{
        left: -500px;
        opacity: 0;
    }
    a{
        margin: 0 0 20px 0;
        font-size: 25px;
        text-align: left;
        user-select: none;
     
       &:hover{
        color: #ff1414;
           &::after{
                opacity: 0;
           }
       }
    }

    
}



`