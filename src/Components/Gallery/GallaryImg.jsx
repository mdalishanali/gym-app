import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Overlay } from '../GlobalComponents/Overlay';
export const GallaryImg = ({galleryBg}) => {
  return (
   <div css={styles} className="galleryImg">
        <Overlay/>
        <img src={galleryBg} alt="trainner"/>
   </div>
  )
}

const styles = css`
width: 100%;
max-width: 35%;
height: 450px;
position: relative;
cursor: pointer;
&:hover{
    .overlay{
        opacity: 1;
        transition: opacity 700ms ease-in-out;
    }
}
.overlay{
    opacity: 0;
}
img{
    width: 100%;
    height: 100%;
    display: block;
}
    
`