import React, { FC } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import twitterIcon from '../../assets/images/icon_twitter.svg';
import fbIcon from '../../assets/images/icon_fb.svg';
import iconCopy from '../../assets/images/icon_copy.svg';

const MainConatiner = styled.div`
  margin-top: 100px;
  text-align: center;
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
  text-align: center;
  justify-content: center;
  align-items: center;

  li {
    padding: 1rem;
    flex: 0 0;
  }

  button {
    background-color: rgba(26, 27, 31, 0);
    border: none;
    outline: 0;
  }
`;
const Share: FC = () => {
  const IMAGE_PATH_LIST = [
    {
      imagePath: twitterIcon,
      url: `https://twitter.com/home?status=${document.URL}`,
      alt: 'twitterIcon',
    },
    {
      imagePath: fbIcon,
      url: `https://www.facebook.com/sharer/sharer.php?u=${document.URL}`,
      alt: 'fbIcon',
    },
  ];

  const onClickCopy = () => {
    const elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = document.URL;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  };

  return (
    <MainConatiner>
      <h1>Share ISR</h1>
      <Ul>
        <button type="button" key="0" onClick={onClickCopy}>
          <li>
            <img src={iconCopy} alt="iconCopy" />
          </li>
        </button>
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

export default Share;

Share.displayName = 'Share';
