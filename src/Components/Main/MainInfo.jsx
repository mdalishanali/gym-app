import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from '../GlobalComponents/Button';
export const MainInfo = () => {
  return (
    <div css={styles} className="mainInfo">
        <h3>Build Up Yours</h3>
        <h1>Body Shape</h1>
        <p>Build Your Body and Fitness with Professional Touch</p>    
        <Button text="JOIN US"/>
    </div>
  )
}
const styles = css`
h3{
    font-size: 43px;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
}
h1{
    font-size: 150px;
    font-weight: 900;
    line-height: 1;
    margin: 24px 0;
    text-transform: uppercase;
}
p{
    font-size: 21px;
}
.btn{
    margin: 32px 0 0 0;
    padding: 15px 50px;
    &:hover{
        background: transparent;
        color: #ff1414;

    }
}

@media (max-width:640px){
    h1{
        font-size: 40px;

    }
    p{
        font-size: 18px;
    }
}
@media (min-width:641px) and (max-width:965px){
    h1{
        font-size: 80px;
    }
}
`