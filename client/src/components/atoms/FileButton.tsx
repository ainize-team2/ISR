import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import Button from './Button';

const MainContainer = styled.div`
  display: inline-block;
  font-weight: normal;
  font-size: 14px;
  line-height: 28px;
  color: ${theme.color.primary.LightViolet};

  width: 300px;
  label {
    width: 100%;
    display: inline-block;
  }

  button {
    margin-right: 10px;
  }

  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  selectFile?: HTMLInputElement['files'];
}

const FileButton: FC<InputProps> = ({ name, id, selectFile, ...restProps }) => {
  return (
    <MainContainer>
      <Button variant="Rectangle">
        <label htmlFor={id}>{name}</label>
      </Button>
      <input type="file" id={id} {...restProps} />
      {selectFile && selectFile[0] ? selectFile[0].name : ''}
    </MainContainer>
  );
};

export default FileButton;

FileButton.displayName = 'FileButton';
