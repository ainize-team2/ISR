import React, { FC, InputHTMLAttributes } from 'react';
import theme from 'theme';
import styled from 'styled-components';

const BaseRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
  }
  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #808080;
    opacity: 0.2;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: 6px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  &:not(:checked) + label:after {
    opacity: 0;
    background: ${theme.color.primary.LightViolet};
  }
  &:checked + label:after {
    opacity: 1;
    background: ${theme.color.primary.LightViolet};
  }
`;

const RadioButtonLabel = styled.label`
  padding-top: 2px;
  font-family: 'Montserrat';
  margin: 0;
  color: ${theme.color.primary.White};
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 28px;
`;

const RADIOS = {
  default: BaseRadio,
};

type RadioType = 'default';

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: RadioType;
  label?: string;
  id: string;
  name: string;
  value: string;
}

const Radio: FC<ButtonProps> = ({
  id,
  name,
  value,
  variant = 'default',
  label = '',
  ...restProps
}) => {
  const RadioComponent = RADIOS[variant];
  return (
    <div>
      <RadioComponent id={id} name={name} value={value} type="radio" {...restProps} />
      <RadioButtonLabel htmlFor={id}>{label}</RadioButtonLabel>
    </div>
  );
};

export default Radio;

Radio.displayName = 'Radio';
