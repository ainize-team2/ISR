import React, { FC, useState } from 'react';
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

const CopiedContainer = styled.div`
  position: fixed;
  width: 190px;
  height: 50px;
  padding: 15px;
  font-size: 18px;
  background-color: rgba(65, 221, 146, 0.6);
  color: ${theme.color.primary.White};
  bottom: 10px;
  left: 10px;
  border: 1px solid rgba(102, 186, 255, 0.4);
  box-shadow: 0px 0px 20px 10px rgba(102, 186, 255, 0.2);
  border-radius: 7px;
`;

const Share: FC = () => {
  const [copied, setcCopied] = useState<boolean>(false);

  const IMAGE_PATH_LIST = [
    {
      imagePath: twitterIcon,
      url: `http://twitter.com/share?&url=${document.URL}`,
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
    setcCopied(true);

    setTimeout(() => {
      setcCopied(false);
    }, 2000);
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
      {copied ? <CopiedContainer>Copied!</CopiedContainer> : ''}
    </MainConatiner>
  );
};

export default Share;

Share.displayName = 'Share';
