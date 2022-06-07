import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TrainerCardIcons } from './TrainerCardIcons';
export const TrainerCardOverlay = () => {
  return (
    <div css={styles} className="cardOverlay">
      <TrainerCardIcons/>
    </div>  
  )
}
const styles = css`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  height: 90%;
`;