import React from 'react'
import { TrainerCardOverlay } from './TrainerCardOverlay'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const TrainerCard = ({trainerName,trainerGender,trainerImg}) => {
  return (
   <div css={styles} className="trainnerCard">
     <div className="trainerImg">
      <TrainerCardOverlay/>
        <img src={trainerImg} alt="trainer" />
     </div>
     <h2>{trainerName}</h2>
     <p>{trainerName}</p>
   </div>
  )
}

const styles = css`
  color: #fff;
  &:hover {
    .cardOverlay {
      opacity: 1;
      height: 100%;
      transition: opacity 400ms ease-in-out, height 400ms ease-in-out;
    }
  }
  .trainerImg {
    position: relative;
  }
  h2 {
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    margin: 14px 0 0 0;
  }
  p {
    font-size: 16px;
    margin: 16px 0 0 0;
  }
  @media (max-width: 769px) {
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
    .trainerImg {
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1200px) {
    width: 100%;
    max-width: 47%;
    margin-bottom: 30px;
    .trainerImg {
      img {
        width: 100%;
      }
    }
  }
`;