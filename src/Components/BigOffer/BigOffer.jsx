import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import offerBg from "../Images/offerBg.png";
import { Container } from '../GlobalComponents/Container';
import { BigOfferInfo } from './BigOfferInfo';

export const BigOffer = () => {
  return (
    <section css={styles} className="bigOffer">
        <Container>
            <BigOfferInfo/>
        </Container>
    </section>
  )
}

const styles = css`
    width: 100%;
    padding: 200px 0;
    background: url("${offerBg}") no-repeat center/cover;
    .container{
        display: flex;
        justify-content: flex-end;
    }

    @media(max-width:800px){
        .container{
            justify-content: center;
            max-width: 90%;
        }
    }

`
