import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Main = () => {
  return (
    <React.Fragment>
      <Header>
        <Image src="/assets/logo.svg" alt="logo" />
        <LoginBtn>LOGIN</LoginBtn>
      </Header>
      <Body>
        <ContentWrapper>
          <Image src="/assets/cta-logo-one.svg" alt="" />
          <BlueBtn type="button">
            GET ALL THERE
          </BlueBtn>
          <div style={{color: 'white'}}>
            Get PRemier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
            As of 03/226/21, the price of Disney+ and The Disney Bundel will increase by $1.
          </div>
          <Image src="/assets/cta-logo-two.png" alt="" />
        </ContentWrapper>
      </Body>
    </React.Fragment>
  );
}

const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: black;
  padding: 1rem 0;

img {
  width: 100px;
  height: 100%;
  margin-left: 1rem;
}
  `;

const Body = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92vh;
  background: url('/assets/login-background.jpg');
`;

const ContentWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 720px;
  height: 350px;

img {
  width: 100%;
}
`;

const BlueBtn = styled.button `
  width: 100%;
  height: 4rem;
  background-color: blue;
  color: white;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const LoginBtn = styled.button `
  width: 100px;
  height: 90%;
  border: white 1px solid;
  background-color: transparent;
  color: white;
  margin-right: 1rem;
  cursor: pointer;
`;

export default Main;