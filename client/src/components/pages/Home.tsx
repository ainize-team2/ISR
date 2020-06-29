import React from 'react';
import styled from 'styled-components';
import Play from '../organisms/Play';
import ProjectList from '../molecules/ProjectList';
import Share from '../molecules/Share';

const MainContainer = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1550px;

  @media (max-width: 1440px) {
    max-width: 1300px;
  }
  @media (max-width: 1300px) {
    max-width: 1244px;
  }
`;

export default function Home(): React.ReactElement {
  return (
    <MainContainer>
      <Play
        title="ISR-Image Super Resolution"
        content="Super-scale your images and run experiments with Residual Dense and Adversarial Networks."
      />
      <Share />
      <ProjectList />
    </MainContainer>
  );
}
