import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; 
import { Title } from '../GlobalComponents/Title';
import { Container } from '../GlobalComponents/Container';
import { FeaturesCard } from './FeaturesCard';
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";
export const Features = () => {
  return (
    <section css = {styles} className="features" id="about">
        <Title
        title="OUR FEATURES"
        desc="There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration."
        
        />
    <Container>
      <FeaturesCard cardImg={IconOne} cardTitle="Weightlifting" />
      <FeaturesCard cardImg={IconTwo} cardTitle="Specific Muscles" />
      <FeaturesCard cardImg={IconThree} cardTitle="Flex Your Muscles" />
      <FeaturesCard cardImg={IconFour} cardTitle="Cardio Exercises" />
    </Container>

    </section>
  )
}
const styles = css`
width: 100%;
padding: 170px 0 ;
background: #000;
.container{
  display: flex;
  padding: 80px 0 0 0;
}
@media (max-width:579px){
  .title{
    padding: 0 40px;
  }
  .container{
      display: flex;
      padding: 80px 0 0 0;
  }
}
  
  @media (max-width:570px){
    .title{
      padding: 0 40px;
    }
    .container{
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width:580px)and (max-width:1000px){
    .title{
      padding: 0 40px;
    }
    .container{
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`