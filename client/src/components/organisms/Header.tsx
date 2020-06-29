import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: none;
  margin-left: 50px;
  margin-right: 50px;
  padding-left: 10px;
  padding-right: 10px;

  .logo {
    font-size: 26px;
    font-weight: normal;
    text-decoration: underline;
    color: ${theme.color.primary.White};
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin-right: 40px;
    font-size: 12px;
    text-decoration: none;
    color: ${theme.color.primary.White};
  }

  a:last-child {
    margin-right: 0;
  }
`;

export default function Header(): React.ReactElement {
  return (
    <HeaderContainer>
      <a href="/home">
        <h3 className="logo">ISR</h3>
      </a>
      <HeaderMenuContainer>
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}
