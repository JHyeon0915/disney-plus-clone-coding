import styled from 'styled-components';
import Logo from 'assets/logo.svg'
import BgImg from 'assets/login-background.jpg'
import Cta1 from 'assets/cta-logo-one.svg';
import Cta2 from 'assets/cta-logo-two.png';

function Main(): JSX.Element {
  return (
    <>
      <Header>
        <img src={Logo} alt="logo" />
        <LoginBtn>LOGIN</LoginBtn>
      </Header>
      <Body>
        <ContentWrapper>
          <img src={Cta1} alt="" />
          <BlueBtn type="button">
            GET ALL THERE
          </BlueBtn>
          <div style={{color: 'white'}}>
            Get PRemier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
            As of 03/226/21, the price of Disney+ and The Disney Bundel will increase by $1.
          </div>
          <img src={Cta2} alt="" />
        </ContentWrapper>
      </Body>
    </>
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
  background: url(${BgImg});
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