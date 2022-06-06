import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ImgOverlay } from '../GlobalComponents/ImgOverlay';
import { JoinUsInfo } from './JoinUsInfo';
export const JoinUsCard = ({title}) => {
  return (
   <div css={styles} className="card">
       <ImgOverlay/>
       <JoinUsInfo title = {title}/>
       
   </div>
  )
}
const styles = css`
    width: 100%;
    max-width: 50%;
    padding: 200px 0;
    position: relative;
    &:hover{
        background-size: 105% 105%;
    }
    @media (max-width:1000px){
        max-width: 100%;
    }
`