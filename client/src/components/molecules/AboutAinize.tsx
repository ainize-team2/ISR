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
`;

const AboutAinize: FC<AboutAinizeType> = ({ title, contents }) => {
  return (
    <MainContainer>
      <h1>{title}</h1>
      {contents.map((content) => {
        return <h2>{content}</h2>;
      })}
      <a target="_blank" rel="noopener noreferrer" href={constants.AINIZE_MAIN_URL}>
        <Button style={{ width: '252px' }} onClick={onClickAinizeLink}>
          <img className="svg" src={AinizeIcon} alt="AinizeIcon" /> Visit Ainize Website
        </Button>
      </a>
      <a target="_blank" rel="noopener noreferrer" href={constants.STACKOVERFLOW_URL}>
        <Button style={{ marginLeft: '10px', width: '252px' }} onClick={onClickStackLink}>
          <img className="svg" src={StackIcon} alt="StackOverflow" />
          Ask on Stack Overflow
        </Button>
      </a>
    </MainContainer>
  );
};

export default AboutAinize;

AboutAinize.displayName = 'AboutAinize';
