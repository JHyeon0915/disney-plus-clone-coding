import Link from 'next/link';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper>
      <H1>login</H1>
      <Form>
        <label htmlFor="email" >email:</label>
        <input type="email" id="email"/>      
        <label htmlFor="password">password:</label>
        <input type="password" id="password" /> 
        <Link href="/greeting">
          <LoginBtn type="button">Login</LoginBtn>
        </Link>
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
  height: fit-content;
  padding-top: 9rem;

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
  width: 100%;
  height: 45px;
  margin: 1rem 0;
  background-color: #113ccf;
  color: white;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
&:hover {
  box-shadow: 2px 3px 5px lightgrey;
}
`