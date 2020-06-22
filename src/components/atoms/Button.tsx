import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import thema from 'theme';

const DefaultButton = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 50px;
  width: 160px;
  height: 50px;
  left: 36px;
  top: 0px;
  margin: 12px 0px;
  border-radius: 32px;
  border: none;
  outline: 0;
  cursor: pointer;
  background: ${thema.color.primary.Black};
  color: ${thema.color.primary.White};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  img {
    margin-right: 10px;
  }
  &:hover {
    background: ${thema.color.primary.Violet};
    color: ${thema.color.primary.White};
  }

  &:active {
    background: ${thema.color.primary.DarkViolet};
    color: ${thema.color.primary.White};
  }

  /** 비활성 상태일 때의 스타일 */
  &:disabled {
    background: ${thema.color.primary.Black};
    color: ${thema.color.primary.White};
    opacity: 0.2;
  }
`;

const RectangleButton = styled(DefaultButton)`
  background: ${thema.color.primary.Gray};
  border: 1px solid ${thema.color.primary.White};
  border-radius: 10px;
`;

const BUTTONS = {
  default: DefaultButton,
  Rectangle: RectangleButton,
};

type ButtonType = 'default' | 'Rectangle';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button Style */
  variant?: ButtonType;
}

const Button: FC<ButtonProps> = ({ variant = 'default', ...restProps }) => {
  const ButtonComponent = BUTTONS[variant];
  return <ButtonComponent {...restProps} />;
};

export default Button;

Button.displayName = 'Button';
