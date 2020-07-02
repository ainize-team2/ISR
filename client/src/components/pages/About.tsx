import React from 'react';
import styled from 'styled-components';
import AboutHero from '../molecules/AbouHero';
import AboutRepo from '../molecules/AboutRepo';
import AboutAinize from '../molecules/AboutAinize';

const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1550px;

  @media (max-width: 1440px) {
    max-width: 1100px;
  }

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 1000px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 600px;
  }

  @media (max-width: 600px) {
    max-width: 400px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default function Home(): React.ReactElement {
  return (
    <MainContainer>
      <AboutHero
        title="Join Project Reinvent to improve ISR"
        subTitle="Open Resource initiative is about converting text-based open source projects into live services. Without managing their own server, anyone can contribute and improve the project as well as its service on this website. Let’s improve this project together."
        quote='"Seeing a new version of my project, developed further by someone else was such a unique experience."'
        name="iamchanii"
        userInfo="open source developer / author of Can I fish project"
      />
      <AboutRepo
        title="What is ISR (Image Super-Resolution)"
        contents={[
          'Image Super-Resolution project is an open-source project to upscale and improve the quality of low-resolution images, using deep learning models such as Residual Dense Network(RDN) and Residual Restructured Dense Network(RRDN).',
          'This endpoint provides the most recent and powerful model: RRDN, trained with Adversarial and VGG features losses.',
        ]}
      />
      <AboutAinize
        title="What is Ainize"
        contents={[
          "Ainize is a serverless cloud platform that helps developers to transform open-source projects into live services. To encourage the creation of innovative projects, deploying public Github repositories is free at Ainize. If your repo has a Dockerfile, you're just one click away from free deployments!",
        ]}
      />
    </MainContainer>
  );
}
