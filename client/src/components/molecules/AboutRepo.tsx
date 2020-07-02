import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import SampleImg from '../../assets/images/baboon-compare.png';

type AboutRepoType = {
  title: string;
  contents: string[];
};

const MainContainer = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 120px 145px 0px 145px;
  color: ${theme.color.primary.White};

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
  }
  h2,
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  h3 {
    font-weight: bold;
  }
  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    mix-blend-mode: normal;
    opacity: 0.6;
    margin-top: 0px;
  }

  img {
    display: flex;
    width: 560px;
    height: 540px;
    margin-bottom: 15px;
    margin-top: 35px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: 0;
    color: ${theme.color.primary.White};
  }

  @media (max-width: 1440px) {
    padding: 120px 145px 0px 145px;
  }

  @media (max-width: 1200px) {
    padding: 120px 50px 0px 50px;
  }

  @media (max-width: 1000px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 600px;
    img {
      width: 360px;
      height: 340px;
    }
    h2,
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;

const AboutHero: FC<AboutRepoType> = ({ title, contents }) => {
  return (
    <MainContainer>
      <h1>{title}</h1>
      <h2>{contents[0]}</h2>
      <img src={SampleImg} alt="SampleImg" />
      <h4>RRDN GANS model (left), bicubic upscaling (right)</h4>
      <h2>{contents[1]}</h2>
      <h3>
        Please find the original ISR{' '}
        <a
          href="https://github.com/idealo/image-super-resolution"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </h3>
    </MainContainer>
  );
};

export default AboutHero;

AboutHero.displayName = 'AboutHero';
