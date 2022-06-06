import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../GlobalComponents/Container';
import { JoinUsCard } from './JoinUsCard';
import ForGirlBg from "../Images/forGirl.png";
import ForBoysBg from "../Images/forBoys.png";
export const JoinUs = () => {
  return (
   <section css={styles}>
       <Container>
        <JoinUsCard title="FOR GIRLS"/>
        <JoinUsCard title="FOR BOYS"/>
       </Container>
   </section>
  )
}
const styles = css`
    width: 100%;
        .container{
            max-width: 100%;
            display: flex;
            .card{
                background: url("${ForGirlBg}") no-repeat center/cover;
                background-size: 100% 100%;
                transition: all 300ms ease-in-out;
                &:hover{
                    background-size: 110% 110%;
                }
                &:last-of-type{
                    background: url("${ForBoysBg}") no-repeat center/cover;
                    background-size: 100% 100%;
                    &:hover{
                    background-size: 110% 110%;
                }
            }
        }
    }
        @media (max-width:1000px){
            .container{
                flex-direction: column;
                align-items: center;
            }
        }
        
`