import React, { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import deoldify from '../../assets/images/deoldify_link.svg';
import ugatit from '../../assets/images/ugatit_link.svg';

const MainConatiner = styled.div`
  margin-top: 100px;
  text-align: center;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: ${theme.color.primary.White};
  }
`;

const Ul = styled.ul`
  margin: 0 auto 1rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 430px) {
    width: 350px;

    img {
      width: 350px;
    }
  }

  li {
    padding: 1rem;
    flex: 0 0;
  }
`;

const ProjectList: FC = () => {
  const IMAGE_PATH_LIST = [
    {
      imagePath: deoldify,
      url: 'https://deoldify-api.kmswlee.endpoint.ainize.ai/',
      alt: 'deoldify',
    },
    {
      imagePath: ugatit,
      url: 'https://ugatit-gpu.kmswlee.endpoint.ainize.ai/',
      alt: 'ugatit',
    },
  ];

  return (
    <MainConatiner>
      <h1>Try more</h1>
      <Ul>
        {IMAGE_PATH_LIST.map((imageInfo, index) => {
          return (
            <a key={String(index)} target="_blank" rel="noopener noreferrer" href={imageInfo.url}>
              <li>
                <img src={imageInfo.imagePath} alt={imageInfo.alt} />
              </li>
            </a>
          );
        })}
      </Ul>
    </MainConatiner>
  );
};

export default ProjectList;

ProjectList.displayName = 'ProjectList';
