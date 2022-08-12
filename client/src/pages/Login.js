import React, { useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../helpers/AuthContext";
import img from '../assets/signup.jpg'
import "../style/about.css";


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
  margin-left: auto;
    margin-right: auto;
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
  margin-left: 250px;
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
  margin-left: 270px;
`;

function Login() {
  const [CIN, setCIN] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useNavigate();

  const login = () => {
    const data = { CIN: CIN, nom: nom, password: password };
    axios.post("http://localhost:8000/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        history("/");
      }
    });
  };
  return (
    <Container>
      <Wrapper>
        <h1 className='Title'>Se connecter</h1>
        <Form>
      <input
        type="text"
        onChange={(event) => {
          setCIN(event.target.value);
            }}
            placeholder="CIN"
      />
      <input
            type="text"
            placeholder="Nom d'utilisateur"            
        onChange={(event) => {
          setNom(event.target.value);
        }}
      />
      <input
            type="password"
            placeholder="Mot de passe"           
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
          <Button onClick={login}> Login </Button>
          <h1 className='Title2'>Vous ne possédez pas de compte ?</h1>
          <Link to="/signup"><Linki >Inscrivez-vous</Linki></Link>
    </Form>
      </Wrapper>
    </Container>
    
  );
}

export default Login;