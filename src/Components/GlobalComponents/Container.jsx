import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Container = ({children}) => {
  return (
        <div css={styles} className="container">
            {children}
        </div>
  )
}

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
    
`;
