import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import GithubIcon from '../../assets/images/icon_github_white.svg';
import * as constants from '../../common/constants';
import { onClickGithubLink } from '../../common/ga';
import theme from '../../theme';
import AboutHeroImg from '../../assets/images/about_hero.svg';

type AboutHeroType = {
  title: string;
  subTitle: string;
  quote: string;
  name: string;
  userInfo: string;
};

const MainContainer = styled.div`
  text-align: center;
  margin: 0px;
  max-width: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${AboutHeroImg});
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  padding: 120px 360px 0px 360px;

  h1 {
    margin: 20px 60px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 80px;
    text-align: center;
    color: ${theme.color.primary.Black};
  }

  h2 {
    margin: 0px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  h3 {
    margin: 0px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
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
  }

  @media (max-width: 600px) {
    padding: 120px 10px 0px 10px;
    max-width: 400px;
    h1 {
      font-size: 50px;
      line-height: 55px;
    }
    h2 {
      font-size: 17px;
      line-height: 23px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 42px;
      line-height: 51px;
    }
  }
`;

const ContentContaienr = styled.div`
  h2 {
    color: ${theme.color.primary.Black};
    opacity: 0.6;
  }
`;

const QuoteContainer = styled.div`
  background: linear-gradient(180deg, rgba(58, 58, 58, 0.8) 0%, #3a3a3a 100%);
  backdrop-filter: blur(50px);
  border-radius: 60px 60px 0px 0px;
  padding: 60px 130px 20px 130px;

  h2 {
    color: ${theme.color.primary.LightViolet};
    margin: 10px 0px 10px 0px;
  }
  h3 {
    color: ${theme.color.primary.White};
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    padding: 60px 40px 20px 40px;
  }
`;

const AboutHero: FC<AboutHeroType> = ({ title, subTitle, quote, name, userInfo }) => {
  return (
    <MainContainer>
      <ContentContaienr>
        <h1> {title} </h1>
        <h2> {subTitle} </h2>
        <a
          target="_blank"
          onClick={onClickGithubLink}
          rel="noopener noreferrer"
          href={constants.GITHUB_URL}
        >
          <Button style={{ margin: '40px' }}>
            <img className="svg" src={GithubIcon} alt="GitHubIcon" />
            Github repo
          </Button>
        </a>
      </ContentContaienr>
      <QuoteContainer>
        <h2>{quote}</h2>
        <h3 style={{ fontWeight: 'bold' }}>{name}</h3>
        <h3>{userInfo}</h3>
      </QuoteContainer>
    </MainContainer>
  );
};

export default AboutHero;

AboutHero.displayName = 'AboutHero';
