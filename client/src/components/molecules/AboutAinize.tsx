import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Button from '../atoms/Button';
import * as constants from '../../common/constants';
import { onClickAinizeLink, onClickStackLink } from '../../common/ga';
import AinizeIcon from '../../assets/images/icon_ainize_white.svg';
import StackIcon from '../../assets/images/icon_stackoverflow.svg';

type AboutAinizeType = {
  title: string;
  contents: string[];
};

const MainContainer = styled.div`
  text-align: center;
  padding: 90px 200px 0px 200px;
  background: #44444d;
  height: 494px;
  border-radius: 32px;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    color: ${theme.color.primary.White};
  }

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: ${theme.color.primary.White};
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  .ainizeButton {
    width: 240px;
  }
  .stackoverButton {
    margin-left: 10px;
    width: 252px;
  }

  @media (max-width: 1000px) {
    padding: 80px 100px 0px 100px;
  }

  @media (max-width: 800px) {
    padding: 50px 70px 0px 70px;
    .stackoverButton {
      margin-left: 0px;
    }
  }

  @media (max-width: 600px) {
    padding: 15px 70px 0px 70px;
    .stackoverButton {
      font-size: 14px;
      line-height: 49px;
      width: 202px;
    }
    .ainizeButton {
      font-size: 14px;
      line-height: 49px;
      width: 202px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 400px) {
    padding: 15px 30px 0px 30px;
    h1 {
      margin-top: 0px;
      margin-buttom: 0px;
    }
    height: auto;
  }
`;

const AboutAinize: FC<AboutAinizeType> = ({ title, contents }) => {
  return (
    <MainContainer>
      <h1>{title}</h1>
      {contents.map((content) => {
        return <h2>{content}</h2>;
      })}
      <a target="_blank" rel="noopener noreferrer" href={constants.AINIZE_MAIN_URL}>
        <Button className="ainizeButton" onClick={onClickAinizeLink}>
          <img className="svg" src={AinizeIcon} alt="AinizeIcon" /> Visit Ainize Website
        </Button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href={constants.STACKOVERFLOW_URL}>
        <Button className="stackoverButton" onClick={onClickStackLink}>
          <img className="svg" src={StackIcon} alt="StackOverflow" />
          Ask on Stack Overflow
        </Button>
      </a>
    </MainContainer>
  );
};

export default AboutAinize;

AboutAinize.displayName = 'AboutAinize';
