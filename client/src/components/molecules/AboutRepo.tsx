import React, { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

type AboutRepoType = {
  title: string;
  contents: string[];
  end: string;
};

const MainContainer = styled.div`
  text-align: center;
  padding: 90px 0px 90px 0px;

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    color: ${theme.color.primary.White};
  }

  h2,
  h3 {
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
  h3 {
    font-weight: bold;
  }
`;

const AboutHero: FC<AboutRepoType> = ({ title, contents, end }) => {
  return (
    <MainContainer>
      <h1>{title}</h1>
      {contents.map((content) => {
        return <h2>{content}</h2>;
      })}
      <h3>{end}</h3>
    </MainContainer>
  );
};

export default AboutHero;

AboutHero.displayName = 'AboutHero';
