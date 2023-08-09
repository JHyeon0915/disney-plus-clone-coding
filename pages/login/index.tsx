import Link from 'next/link';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper>
      <H1>login</H1>
      <Form>
        <label htmlFor="name" >name:</label>
        <input type="email" />      
        <label htmlFor="password">password:</label>
        <input type="password" id="password" /> 
        <LoginBtn type="button">Login</LoginBtn>
      </Form>
      <Link href="/signup" style={{color: 'black', textDecoration: 'underline'}}>Sign Up</Link>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;

label {
  font-weight: bold;
  text-transform: uppercase;
}
input {
  width: 400px;
  height: 35px;
}
`;

const H1 = styled.h1`
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const LoginBtn = styled.button`
  height: 45px;
  margin: 1rem 0;
  background-color: #113ccf;
  color: white;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`