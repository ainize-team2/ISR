import React, { FC } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import theme from '../../theme';

type ImageBoxType = {
  loading: boolean;
  src: string;
  title: string;
  color?: string;
};

const MainContainer = styled.div`
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
`;

const SubContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(26, 27, 31, 0.2);
  height: 420px;
  width: 420px;

  @media (max-width: 430px) {
    height: 350px;
    width: 350px;

    img {
      height: 350px;
      width: 350px;
    }
  }

  .loading {
    opacity: 0.6;
    margin-top: 200px;
  }
`;

const Loader = styled(ClipLoader)`
  opacity: 0.5;
  color: ${theme.color.primary.White};
`;

const ImageBox: FC<ImageBoxType> = ({ loading, src, title, color = '#FFFFFF' }) => {
  return (
    <MainContainer>
      <p style={{ color }}>{title}</p>
      <SubContainer>
        {loading ? (
          <div className="loading">
            <Loader size={16} loading={loading} />
            loading...
          </div>
        ) : (
          <img src={src} alt="ImageBox" />
        )}
      </SubContainer>
    </MainContainer>
  );
};

export default ImageBox;

ImageBox.displayName = 'ImageBox';
