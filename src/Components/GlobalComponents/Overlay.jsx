/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

export const Overlay = () => {
  return (
    <div className="overlay" css={styles}></div>
  )
}
const styles = css`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: radial-gradient(ellipse at center,
rgba(181,8,8,0.38) 0%,
rgba(0,0,0,0.6) 100%

);
`