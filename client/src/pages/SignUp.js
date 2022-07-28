import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
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
  margin-left: 280px;
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
  margin-left: 300px;
`;

const SignUp = () => {
  const [cinReg,setcinReg]=useState("");
  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg, setPasswordReg] = useState("");
  
  return (
    <div>

      
    <Container>
      

      <Wrapper >
        
        <h1 className='Title'>Créer votre compte</h1>
        <Form action ="/signup" method="Post" >
            <Input type="text" name="CIN" placeholder="CIN"
              onChange={(e) => {
              setcinReg(e.target.value)
          }} />
            <Input type="text" name="NOM" placeholder="NOM"
            onChange={(e) => {
              setUsernameReg(e.target.value)
          }}/>
            <Input type="password" name="password" placeholder="mot de passe"
          onChange={(e) => {
              setPasswordReg(e.target.value)
          }}  />
                      <Button type="submit">S'inscrire</Button>
                      <h1 className='Title2'>Vous possédez déjà un compte?</h1>
          <Link to="/login"><Linki >Connectez-vous</Linki></Link>
        </Form>
      </Wrapper>
      
    </Container>
      
    </div>
  );
};

export default SignUp;