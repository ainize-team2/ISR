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
        subTitle="Project Reinvent is an initiative to bring new life to forgotten open-source projects. We added new designs and features to Polytunes and are now waiting for more contributions."
        quote="“ To have another team, from another part of the world, build new features for my project is something really heartwarming to see.”"
        name="Andrew Lim"
        userInfo="open source developer / author of Crowdy project"
      />
      <AboutRepo
        title="What is ISR"
        contents={[
          'Polytunes is an interactive music pad that aims at creating a new kind of melodies by collaborating without speaking to other players. The project was initially developed by Clement Bourgoin and was submitted to the 2015 Meteor global Distributed Hackathon.',
          'Polytunes makes music only using a Javascript library called Wad, a wrapper around HTML5 WebAudio API, without utilizing flash or sound files.',
        ]}
        end="Find more information about the original version of ISR"
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
