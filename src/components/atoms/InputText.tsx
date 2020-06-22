import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import theme from 'theme';

type InputTextType = 'default';

export interface TextProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputTextType;
}

const RootContainer = styled.div`
  position: relative;
  height: 2rem;
  display: inline-block;
  margin: 10px;
`;

const InputContainer = styled.input`
  padding: 10px;
  color: ${theme.color.primary.White};
  background-color: rgba(80, 80, 80, 0.2);
  width: 720px;
  height: 48px;
  border: none;
  border-radius: 8px;
  appearance: none;

  font-family: inherit;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.02em;
  outline: none;

  &:active {
    border: 1px solid ${theme.color.primary.Violet};
    box-sizing: border-box;
  }

  &:hover {
    border: 1px solid ${theme.color.primary.Violet};
    box-sizing: border-box;
  }
  &::placeholder {
    color: #808080;
  }
`;

const INPUT_TEXTS = {
  default: InputContainer,
};

const InputText: FC<TextProps> = ({ variant = 'default', ...restProps }) => {
  const RadioComponent = INPUT_TEXTS[variant];
  return (
    <RootContainer>
      <RadioComponent {...restProps} />
    </RootContainer>
  );
};

export default InputText;

InputText.displayName = 'InputText';
