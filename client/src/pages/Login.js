import React from 'react';
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../AUM.jpg"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(0.25turn,#093B8D,#93F2F8);
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 55%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  margin-top: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: #e5a775;
  color: black;
  text-decoration: solid;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 290px;
 font-family: "Oleo Script", cursive;
height: 70px;


transform: rotate(-0.07deg);
`;

const Linki = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 260px;
`;

const Login = () => {
  return (
    <div>

      
    <Container>
      

      <Wrapper >
        
        <h1 className='Title'>Se connecter</h1>
        <Form action="../../login"method="post">
          <Input type="text" name="CIN" placeholder="CIN" />
          <Input type="text" name="NOM" placeholder="NOM" />
          <Input type="password" name="password" placeholder="mot de passe" />
          <Button type="submit">Se connecter</Button>
          <Link to="/signup"><Linki >CRÉER UN NOUVEAU COMPTE</Linki></Link>
        </Form>
      </Wrapper>
      
    </Container>
      
    </div>
  );
};

export default Login;