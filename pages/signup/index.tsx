import Link from 'next/link';
import { FormEventHandler, useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const onSignupClicked = () => {
    setIsRegistered(true);
  }
  return (
    <Wrapper>
      <H1>sign up</H1>
      <Form>
        <label htmlFor="name" >name:</label>
        <input type="text" />
        <label htmlFor="email">email:</label>
        <input type="password" id="email" /> 
        <label htmlFor="password">password:</label>
        <input type="password" id="password" />
        {isRegistered && 
          <Popup>
            <p style={{verticalAlign: 'middle'}}>
              You have been successfully registered.
            </p>
          </Popup>
        }
        <SignupBtn type="button" onClick={onSignupClicked}>sign up</SignupBtn>
      </Form>
      <Link href="/login" style={{color: 'black', textDecoration: 'underline'}}>Login</Link>
    </Wrapper>
  );
}

export default Signup;

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

const SignupBtn = styled.button`
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

const Popup = styled.div`
  height: 45px;
  background-color: mediumseagreen;
  margin: 1rem 0 0;
  padding-left: 10px;
  color: white;
  border-radius: 5px;
`;