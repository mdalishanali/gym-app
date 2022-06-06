import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const Title = ({title,desc}) => {
  return (
        <div css={styles} className="title">
                    <h2>{title}</h2>
                    <p>{desc}</p>        
        </div>
  )
}
const styles = css`
    text-align   : center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    h2{
        font-size: 40px;
        line-height: 1;
        color: #fff;
    }
    p{
        font-size: 16px;
        color: #aab1b7;
        line-height: 1.5;
        margin: 10px 0 0 0;
    }
`