import React, { FC, useState } from 'react';
import theme from 'theme';
import styled from 'styled-components';
import { urlToImage, fileToImage } from '../../service/api';
import Radio from '../atoms/Radio';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import FileButton from '../atoms/FileButton';
import ImageBox from '../molecules/ImageBox';
import PhotoIcon from '../../assets/images/icon_photo_filter.svg';
import DownloadIcon from '../../assets/images/icon_download.svg';
import SamplePost from '../../assets/images/sample_post.svg';
import SamplePre from '../../assets/images/sample_pre.svg';

const MainContainer = styled.div`
  text-align: center;
  margin: 0px;
  max-width: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.color.primary.White};

  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    margin: 0px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const FilterContainer = styled.div`
  margin: 20px 0px 20px 0px;
  max-width: none;
  display: flex;
  flex-direction: column;
  background-color: rgba(26, 27, 31, 0.2);
  text-align: left;
  padding: 30px 60px 30px 60px;
  width: 840px;

  div {
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
  }
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.6;
  }
`;
const RadioContainer = styled.div`
  div {
    display: inline-block;
    margin-left: 20px;
  }
`;
const ResultContainer = styled.div`
  text-align: center;
  margin: 0px;
  margin-top: 65px;
  margin-bottom: 20px;
  max-width: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 840px;
  height: 448px;
  font-weight: bold;

  div {
    display: inline-block;
    flex-wrap: wrap;
    margin: 5px;
  }

  img {
    height: 410px;
    width: 410px;
  }
`;

type PlayType = {
  title: string;
  content: string;
};

const Play: FC<PlayType> = ({ title, content }) => {
  const [method, setMethod] = useState<'url' | 'device'>('url');
  const [originalUrl, setOriginalUrl] = useState<string>('');
  const [enhancedUrl, setEnhancedUrl] = useState<string>('');
  const [urlContent, setUrlContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [fileObject, setFileObject] = useState<FileList | undefined>(undefined);

  const onChange = (event: any) => {
    const { value } = event.target;
    setMethod(value);
  };

  const onClickRun = async () => {
    try {
      setLoading(true);
      if (method === 'url') {
        setOriginalUrl(urlContent);
        const imageUrl = await urlToImage(urlContent);
        setEnhancedUrl(imageUrl);
      } else if (fileObject && fileObject[0]) {
        setOriginalUrl(URL.createObjectURL(fileObject[0]));
        const imageUrl = await fileToImage(fileObject);
        setEnhancedUrl(imageUrl);
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      setOriginalUrl('');
      setEnhancedUrl('');
      alert(error);
    }
    setLoading(false);
  };

  const originalSrc = originalUrl === '' ? SamplePre : originalUrl;
  const enhancedUrlSrc = enhancedUrl === '' ? SamplePost : enhancedUrl;

  return (
    <MainContainer>
      <img src={PhotoIcon} alt="PhotoIcon" />
      <h1>{title}</h1>
      <h2>{content}</h2>
      <FilterContainer>
        <RadioContainer>
          Upload image here
          <Radio
            id="1"
            name="method"
            value="url"
            label="from url"
            style={{ display: 'inline-block' }}
            checked={method === 'url'}
            onChange={onChange}
          />
          <Radio
            id="2"
            name="method"
            value="device"
            label="from device"
            style={{ display: 'inline-block' }}
            checked={method === 'device'}
            onChange={onChange}
          />
        </RadioContainer>
        {method === 'url' ? (
          <InputText
            placeholder="http://"
            value={urlContent}
            onChange={(event) => {
              const { value } = event.target;
              setUrlContent(value);
            }}
          />
        ) : (
          <FileButton
            name="upload file"
            id="test"
            selectFile={fileObject}
            onChange={async (e) => {
              if (e.target.files) {
                setFileObject(e.target.files);
              }
            }}
          />
        )}
        <h3>Size of image file should be less than 5MB. We do NOT store your uploaded image.</h3>
      </FilterContainer>
      <Button
        style={{ width: '120px', height: '64px', fontSize: '16px' }}
        onClick={onClickRun}
        disabled={
          (method === 'url' && (urlContent === ' ' || !urlContent.includes('http'))) ||
          (method === 'device' && !fileObject)
        }
      >
        Run
      </Button>
      <ResultContainer>
        <ImageBox title="original image" src={originalSrc} loading={loading} />
        <ImageBox title="enhanced image" src={enhancedUrlSrc} loading={loading} />
      </ResultContainer>
      <a href={enhancedUrl === '' ? '#' : enhancedUrl} download>
        <Button
          style={{ width: '174px', height: '64px', fontSize: '16px' }}
          disabled={enhancedUrl === ''}
        >
          <img src={DownloadIcon} alt="DownloadIcon" />
          Download
        </Button>
      </a>
    </MainContainer>
  );
};

export default Play;

Play.displayName = 'Play';
