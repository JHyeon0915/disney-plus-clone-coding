import styled from 'styled-components';
import Link from 'next/link';

const Greeting = () => {
  return(
    <Wrapper>
      <img src="" alt="남자" style={{width: '500px', height: '300px', backgroundColor: 'red'}}/>
      <h1>name</h1>
      <div style={{color: 'grey'}}>aaabbbc@gmail.com</div>
      <Link href="/login">
        <LogoutBtn>logout</LogoutBtn> 
      </Link>
    </Wrapper>
  );
}

export default Greeting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 470px;

h1 {
    margin: 0;
}
`;

const LogoutBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background-color: red;
  color: white;
  border: 0.5px solid black;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  cursor: pointer;
&:hover {
    box-shadow: 2px 3px 5px lightgrey;
}
`