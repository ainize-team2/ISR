import React from 'react';
import styled from 'styled-components';
import { GITHUB_URL, AINIZE_MAIN_URL } from '../../common/constants';
import GitHubIcon from '../../assets/images/icon_github_gray.svg';
import AinizeIcon from '../../assets/images/icon_ainize_gray.svg';
import { onClickAinizeLink, onClickGithubLink } from '../../common/ga';

const FooterContainer = styled.div`
  padding: 40px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: none;
  flex-wrap: wrap;
  a {
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-decoration: none;
    color: #8e8e94 !important;
    margin-top: 10px;
  }

  a:hover {
    text-decoration: none;
  }
  a img {
    margin-right: 8px;
  }
`;

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <a
        className="ainizeLink"
        onClick={onClickAinizeLink}
        target="_blank"
        rel="noopener noreferrer"
        href={AINIZE_MAIN_URL}
      >
        <img src={AinizeIcon} alt="AinizeIcon" />
        Powered by Ainize
      </a>
      <a
        className="githubLink"
        onClick={onClickGithubLink}
        target="_blank"
        rel="noopener noreferrer"
        href={GITHUB_URL}
      >
        <img src={GitHubIcon} alt="AinizeIcon" />
        Contribute on GitHub
      </a>
    </FooterContainer>
  );
}
